{
  type Pet = IDog | ICat;
  // for fix
  //   type Pet = IDog & ICat;

  interface IDog {}
  interface ICat {}

  interface IPet extends Pet {}
}
