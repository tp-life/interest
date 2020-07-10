export class EditorConfig {
  public width = '100%';
  public height = '90%';
  //下载的editor.md的地址
  public path = 'assets/editor.md/lib/';
  public codeFold: true;
  public searchReplace = true;
  public toolbar = true;
  public emoji = true;
  public taskList = true;
  public tex = true;
  public readOnly = false;
  public tocm = true;
  public watch = false;
  public previewCodeHighlight = true;
  public saveHTMLToTextarea = true;
  public markdown = '';
  public flowChart = true;
  public syncScrolling = true;
  public sequenceDiagram = true;
  public imageUpload = false;
  public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
  public imageUploadURL = '';
  public placeholder = '开始你的表演'
  constructor(option: any = null) {
    Object.assign(this, option);
  }
}
