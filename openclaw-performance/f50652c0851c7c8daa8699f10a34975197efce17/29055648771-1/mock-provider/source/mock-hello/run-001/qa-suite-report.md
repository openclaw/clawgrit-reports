# OpenClaw QA Scenario Suite

- Started: 2026-07-09T23:01:33.982Z
- Finished: 2026-07-09T23:01:42.626Z
- Duration ms: 8644
- Passed: 1
- Failed: 0


## Scenarios

### Channel baseline conversation

- Status: pass
- Steps:
  - [x] ignores unmentioned channel chatter
  - [x] replies when mentioned in channel
    - Details: QA-CHANNEL-BASELINE-OK


## Notes

- Runs against qa-channel + qa-lab bus + real gateway child + mock-openai provider.
- Scenarios run serially in one gateway worker.
- Cron uses a one-minute schedule assertion plus forced execution for fast verification.
