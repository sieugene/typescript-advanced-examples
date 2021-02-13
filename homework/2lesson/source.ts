interface Emitter {
  on: (type: TypeMain, handler: HandlerType) => Emitter;
  off: (type: TypeMain, handler: HandlerType) => Emitter | undefined;
  trigger: (event: EventType, args: ArgsType) => Emitter | undefined;
  _dispatch: (event: EventType, args: ArgsType) => Emitter | undefined;
  _offByHandler: (type: TypeMain, handler: HandlerType) => Emitter | undefined;
  _offByType: (type: TypeMain) => Emitter;
  _offAll: () => Emitter;
  events: {
    [key: string]: Function[];
  };
  [key: string]: any;
}

interface EmitterConstructor {
  new (): Emitter;
  [key: string]: any;
}

type TypeMain = string;
type HandlerType = Function;
type EventType = {
  type: string;
};
type ArgsType = any[];

interface CreateEvent {
  new (type: EventType): EventType;
  type: EventType;
  timeStamp: Date;
}

const Emitter = (function (): Emitter {
  var e = Object.create(emitter);
  e.events = {};
  return e;
} as Function) as EmitterConstructor;

const CreateEvent = (function (this: CreateEvent, type: EventType) {
  this.type = type;
  this.timeStamp = new Date();
} as Function) as CreateEvent;

var emitter: Emitter = {
  events: {},
  on: function (type, handler) {
    if (this.events.hasOwnProperty(type)) {
      this.events[type].push(handler);
    } else {
      this.events[type] = [handler];
    }
    return this;
  },

  off: function (type, handler) {
    if (arguments.length === 0) {
      return this._offAll();
    }
    if (handler === undefined) {
      return this._offByType(type);
    }
    return this._offByHandler(type, handler);
  },

  trigger: function (event, args) {
    if (!(event instanceof CreateEvent)) {
      event = new CreateEvent(event);
    }
    return this._dispatch(event, args);
  },
  _dispatch: function (event, args) {
    if (!this.events.hasOwnProperty(event.type)) return;
    args = args || [];
    args.unshift(event);

    var handlers = this.events[event.type] || [];
    handlers.forEach((handler) => handler.apply(null, args));
    return this;
  },

  _offByHandler: function (type, handler) {
    if (!this.events.hasOwnProperty(type)) return;
    var i = this.events[type].indexOf(handler);
    if (i > -1) {
      this.events[type].splice(i, 1);
    }
    return this;
  },

  _offByType: function (type) {
    if (this.events.hasOwnProperty(type)) {
      delete this.events[type];
    }
    return this;
  },
  _offAll: function () {
    this.events = {};
    return this;
  },
};

Emitter.Event = CreateEvent;

Emitter.mixin = function (this: Emitter, obj: any, arr: any) {
  var emitter = new Emitter();
  arr.map(function (name: string) {
    obj[name] = function () {
      return emitter[name].apply(emitter, arguments);
    };
  });
};
