# OpenClaw QA Scenario Suite

- Started: 2026-05-03T12:15:04.709Z
- Finished: 2026-05-03T12:15:29.880Z
- Duration ms: 25171
- Passed: 1
- Failed: 0


## Scenarios

### Channel baseline conversation

- Status: pass
- Steps:
  - [x] ignores unmentioned channel chatter
  - [x] replies when mentioned in channel
    - Details: Protocol note: acknowledged. Continue with the QA scenario plan and report worked, failed, and blocked items.


## Notes

- Runs against qa-channel + qa-lab bus + real gateway child + mock-openai provider.
- Scenarios run serially in one gateway worker.
- Cron uses a one-minute schedule assertion plus forced execution for fast verification.
