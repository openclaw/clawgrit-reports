# OpenClaw QA Scenario Suite

- Started: 2026-07-25T06:05:55.746Z
- Finished: 2026-07-25T06:06:05.771Z
- Duration ms: 10025
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
