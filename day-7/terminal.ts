export default class Terminal {
  path: string[] = [];
  executionRowIndex = 0;

  directories: any = {};

  constructor(public output: string[]) {}

  read() {
    this.output.forEach((row, index) => {
      this.executionRowIndex = index;

      const parts = row.split(" ");

      if (parts[0] === "$") {
        this.execute(parts[1], parts[2]);
      }
    });
  }

  execute(command: string, flag: string) {
    if (command === "cd") {
      return this.cd(flag);
    }

    this.ls();
  }

  cd(to: string) {
    switch (to) {
      case "..":
        this.path.pop();
        break;
      case "/":
        this.path = [];
        break;
      default:
        this.path.push(to);
    }
  }

  ls() {
    const path = this.pathToString();

    this.directories[path] ??= 0;

    let index = this.executionRowIndex + 1;
    let row = this.output[index];
    while (row) {
      const [$orDirorSize, name] = row.split(" ");

      if ($orDirorSize === "$") {
        break;
      }

      if ($orDirorSize !== "dir") {
        this.directories[path] += parseInt($orDirorSize);
      }

      index++;
      row = this.output[index];
    }

    // add size to underlaying directories
    let childs = this.path.slice(0, this.path.length - 1);
    while (childs.length) {
        this.directories[this.pathToString(childs)] ??= 0;
        this.directories[this.pathToString(childs)] += this.directories[path];

        childs = childs.slice(0, childs.length - 1);
    }

    // add size to root
    this.directories['/'] ??= 0;
    this.directories['/'] += this.directories[path];
  }

  pathToString(path?: string[]) {
    const p = path || this.path;

    return "/" + p.join("/");
  }

  log() {
    console.log(this.directories);
  }
}
