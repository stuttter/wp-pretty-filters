# WP Pretty Filters contributor guidance

## Compatibility

- Preserve PHP 7.4 and WordPress 6.4 compatibility unless a dedicated pull
  request explicitly changes the published minimums.
- Preserve the public functions, hook registration, script and style handles,
  asset URLs, and filter-bar class names unless a compatibility plan is part of
  the change.
- Treat administration-screen selectors and DOM relocation carefully. Posts,
  Pages, Comments, Users, and compatible third-party list tables may expose
  different controls through the same markup.

## Tests

- Add or update regression coverage before changing observed behavior.
- Manually validate affected administration screens when changing selectors,
  layout, search handling, or asset styles.
- Run PHP syntax checks, JavaScript syntax checks, and the shared validation
  workflow before requesting review.

## Automation

Follow the organization-level safety boundaries. AI-authored implementation
must remain a draft pull request and cannot modify workflows, release policy,
ownership, security policy, or this file without an explicit maintainer
decision.
