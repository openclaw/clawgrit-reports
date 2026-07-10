# OpenClaw QA Scenario Suite

- Started: 2026-07-10T02:54:11.056Z
- Finished: 2026-07-10T02:54:19.214Z
- Duration ms: 8158
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
