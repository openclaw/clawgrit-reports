# OpenClaw QA Scenario Suite

- Started: 2026-05-02T16:48:10.008Z
- Finished: 2026-05-02T16:48:22.152Z
- Duration ms: 12144
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
