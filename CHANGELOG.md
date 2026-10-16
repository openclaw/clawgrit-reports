# Changelog

## Unreleased

- Update the GitHub App token action to v3.3.0 with refreshed dependencies.
- Keep ClawSweeper comment commands and ignored bot label events from canceling or replacing other dispatches (thanks @SebTardif).
- Limit ClawSweeper dispatch jobs to ten minutes so stalled requests cannot occupy a runner for up to six hours (thanks @SebTardif).
