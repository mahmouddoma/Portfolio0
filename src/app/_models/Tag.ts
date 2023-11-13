export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#75001c');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly HTML = new Tag('TML5', 'orange');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly BOOTSTRAP = new Tag('CSS', 'blue');
    static readonly SCSS = new Tag('SCSS', '#f06795');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#f0dc55');
    static readonly GIT = new Tag('Git', '#f05334');
    static readonly GITHUB = new Tag('GitHub', '#080808');
  static ASPNET: Tag;
  static CSHARP: Tag;
  static REACT: Tag;
  static NODEJS: Tag;
  static JAVA: Tag;

    private constructor(private readonly key: string, public readonly color: string) {}
    toString() { 
        return this.key;
    }
 }
