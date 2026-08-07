# OpenClaw QA Scenario Suite

- Started: 2026-08-07T05:52:55.397Z
- Finished: 2026-08-07T05:53:11.610Z
- Duration ms: 16213
- Passed: 1
- Failed: 0
- Skipped: 0


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
- Scheduling scenarios verify stored schedules and execution behavior through the Gateway.
