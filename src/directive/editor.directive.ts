import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';

import {EditorConfig} from "../util/editor/editorConfig";

declare var editormd: any;
import * as $ from 'jquery'

@Directive({
  selector: '[appEditor]'
})
export class EditorDirective implements AfterViewInit {

  @Input() editConfig: EditorConfig
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>()
  editor: any;

  constructor(@Attribute('id') private id: string) {
  }

  ngAfterViewInit() {
    this.editor = editormd(this.id, this.editConfig || new EditorConfig())
    this.editor.on('change', () => {
      this.onEditorChange.emit(this.getMarkdown())
    })
  }

  getMarkdown() {
    return this.editor.getMarkdown()
  }

  getHtml():string {
    return $('.editormd-preview').html();
  }
}
