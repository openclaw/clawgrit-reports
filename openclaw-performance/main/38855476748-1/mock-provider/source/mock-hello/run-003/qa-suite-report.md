# OpenClaw QA Scenario Suite

- Started: 2026-10-16T05:33:39.826Z
- Finished: 2026-10-16T05:33:51.068Z
- Duration ms: 11242
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
