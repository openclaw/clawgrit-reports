# OpenClaw QA Scenario Suite

- Started: 2026-07-29T06:13:28.737Z
- Finished: 2026-07-29T06:13:39.013Z
- Duration ms: 10276
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
- Scheduling scenarios verify stored schedules and execution behavior through the Gateway.
