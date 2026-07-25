# OpenClaw QA Scenario Suite

- Started: 2026-07-25T18:09:30.113Z
- Finished: 2026-07-25T18:09:42.906Z
- Duration ms: 12793
- Passed: 0
- Failed: 1


## Scenarios

### Channel baseline conversation

- Status: fail
- Details:

```text
expected no outbound messages for 1200ms, saw:
8736685c-d7ae-435f-8b31-ec3f0a8f64a9:Protocol note: acknowledged. Continue with the QA scenario plan and report worked, failed, and blocked items.
```
- Steps:
  - [ ] ignores unmentioned channel chatter
    - Details:

```text
expected no outbound messages for 1200ms, saw:
8736685c-d7ae-435f-8b31-ec3f0a8f64a9:Protocol note: acknowledged. Continue with the QA scenario plan and report worked, failed, and blocked items.
```


## Notes

- Runs against qa-channel + qa-lab bus + real gateway child + mock-openai provider.
- Scenarios run serially in one gateway worker.
- Scheduling scenarios verify stored schedules and execution behavior through the Gateway.
