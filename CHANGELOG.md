# Changelog

## Unreleased

- Keep ClawSweeper comment commands and ignored bot label events from canceling or replacing other dispatches (thanks @SebTardif).
- Limit ClawSweeper dispatch jobs to ten minutes so stalled requests cannot occupy a runner for up to six hours (thanks @SebTardif).
