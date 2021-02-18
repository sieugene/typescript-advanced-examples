{
  interface IPet {
    pose(): void;
  }

  interface IFeline {
    nightvision: boolean;
  }

  interface ICat extends IPet, IFeline {
    color: string;
  }

  let cat: ICat = {
    color: "red",
    pose() {},
    nightvision: true,
  };
}

// Both methods and properties are available
// cat.nightvision
// cat.pose()
