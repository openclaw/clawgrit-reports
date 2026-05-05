# OpenClaw QA Scenario Suite

- Started: 2026-05-05T06:05:00.490Z
- Finished: 2026-05-05T06:05:17.625Z
- Duration ms: 17135
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
