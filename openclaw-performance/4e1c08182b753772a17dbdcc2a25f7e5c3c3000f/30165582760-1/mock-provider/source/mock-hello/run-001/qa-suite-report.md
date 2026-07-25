# OpenClaw QA Scenario Suite

- Started: 2026-07-25T16:29:43.860Z
- Finished: 2026-07-25T16:29:56.586Z
- Duration ms: 12726
- Passed: 0
- Failed: 1


## Scenarios

### Channel baseline conversation

- Status: fail
- Details:

```text
expected no outbound messages for 1200ms, saw:
5ccf4898-8a9d-4865-92eb-9a6c662bdaf9:Protocol note: acknowledged. Continue with the QA scenario plan and report worked, failed, and blocked items.
```
- Steps:
  - [ ] ignores unmentioned channel chatter
    - Details:

```text
expected no outbound messages for 1200ms, saw:
5ccf4898-8a9d-4865-92eb-9a6c662bdaf9:Protocol note: acknowledged. Continue with the QA scenario plan and report worked, failed, and blocked items.
```


## Notes

- Runs against qa-channel + qa-lab bus + real gateway child + mock-openai provider.
- Scenarios run serially in one gateway worker.
- Scheduling scenarios verify stored schedules and execution behavior through the Gateway.
