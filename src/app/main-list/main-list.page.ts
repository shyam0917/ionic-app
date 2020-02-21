import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage implements OnInit {
  switch: string;
  customArr = [
    {
      "ID": 10,
      "post_author": "1",
      "post_date": "2020-02-21 09:38:31",
      "post_date_gmt": "2020-02-21 09:38:31",
      "post_content": "<!-- wp:paragraph -->\n<p>sfdgfjhhjgkkhl</p>\n<!-- /wp:paragraph -->",
      "post_title": "test10",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "open",
      "ping_status": "open",
      "post_password": "",
      "post_name": "test10",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2020-02-21 09:38:31",
      "post_modified_gmt": "2020-02-21 09:38:31",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "http://localhost/wordpress/?p=10",
      "menu_order": 0,
      "post_type": "post",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw"
    },
    {
      "ID": 1,
      "post_author": "1",
      "post_date": "2020-02-20 10:00:34",
      "post_date_gmt": "2020-02-20 10:00:34",
      "post_content": "<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->",
      "post_title": "Hello world!",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "open",
      "ping_status": "open",
      "post_password": "",
      "post_name": "hello-world",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2020-02-20 10:00:34",
      "post_modified_gmt": "2020-02-20 10:00:34",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "http://localhost/wordpress/?p=1",
      "menu_order": 0,
      "post_type": "post",
      "post_mime_type": "",
      "comment_count": "1",
      "filter": "raw"
    }
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.switch = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
