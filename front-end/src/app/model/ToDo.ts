export class ToDo {
  // constructor(public id: number,
  //             public desc: string,
  //             public status: boolean,
  //             public targetDate: string) {
  // }

  constructor(public id: number,
              public username: string,
              public description: string,
              public targetDate: string,
              public done: boolean) {
  }
}
