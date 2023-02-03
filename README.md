<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [gitee-pages](#gitee-pages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# gitee-pages

```yaml
- name: Deploy
  uses: kw214/gitee-pages@v1
  with:
    external_repository: kw214/gitee-pages
    personal_token: ${{ secrets.GITEE_TOKEN }}
    # publish_branch: gh-pages
    publish_dir: ./public
    # allow_empty_commit: true
    # keep_files: true
    # force_orphan: true
    user_name: 'kw214'
    user_email: 'github-actions[bot]@users.noreply.github.com'
    # commit_message: ${{ github.event.head_commit.message }}
    cname: 'gitee-pages.kimmy.me'
```

This [library](https://github.com/kw214/gitee-pages) is inspired by [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).
