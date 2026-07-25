# OpenClaw Source Performance

Generated: 2026-07-25T00:35:13.103Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6502.4ms | 6647.3ms | 6501.1ms | 3291.6ms | 6410.5ms | 46.6ms | 905.1MB | 1.354 |
| skipChannels | gateway, skip channels | 3400.0ms | 6825.1ms | 3399.5ms | 3310.9ms | 3361.4ms | 42.9ms | 920.4MB | 1.471 |
| oneInternalHook | gateway, one configured internal hook | 4600.0ms | 4652.0ms | 4598.9ms | 4514.0ms | 4555.4ms | 43.9ms | 980.9MB | 1.312 |
| allInternalHooks | gateway, all internal hooks | 4498.0ms | 4529.5ms | 4497.8ms | 4418.7ms | 4462.9ms | 44.5ms | 943.7MB | 1.359 |
| fiftyPlugins | gateway, 50 manifest plugins | 8363.5ms | 8436.5ms | 8363.4ms | 4267.2ms | 4342.6ms | 44.0ms | 1148.6MB | 1.225 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8474.3ms | 8506.1ms | 8474.3ms | 4151.7ms | 4238.4ms | 43.3ms | 1120.0MB | 1.298 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 534.5MB | 488.0MB | ok |
| active-memory | 515.5MB | 469.1MB | ok |
| llm-task | 512.3MB | 465.9MB | ok |
| codex | 512.0MB | 465.6MB | ok |
| migrate-hermes | 508.3MB | 461.9MB | ok |
| anthropic | 507.4MB | 461.0MB | ok |
| memory-lancedb | 505.9MB | 459.4MB | ok |
| zoom-meetings | 505.6MB | 459.1MB | ok |
| voice-call | 504.7MB | 458.2MB | ok |
| workboard | 503.4MB | 456.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4141.8ms | 4240.4ms |
| default | post-ready.agent-runtime-plugins.total | 4121.5ms | 4220.2ms |
| default | post-attach.update-check.total | 4118.3ms | 4217.0ms |
| default | post-attach.update-sentinel.total | 4109.1ms | 4207.8ms |
| default | sidecars.restart-sentinel.total | 4107.8ms | 4206.5ms |
| skipChannels | sidecars.session-locks.total | 4449.9ms | 4449.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4448.1ms | 4448.1ms |
| skipChannels | post-attach.update-sentinel.total | 4443.4ms | 4443.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4442.2ms | 4442.2ms |
| skipChannels | sidecars.ready.total | 4426.4ms | 4426.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3416.0ms | 3473.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2702.1ms | 2746.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2675.5ms | 2720.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2674.7ms | 2719.1ms |
| oneInternalHook | sidecars.internal-hooks.total | 944.2ms | 944.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3322.0ms | 3408.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2641.4ms | 2679.9ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2616.1ms | 2654.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2615.2ms | 2653.5ms |
| allInternalHooks | sidecars.internal-hooks.total | 891.5ms | 943.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4884.3ms | 4931.2ms |
| fiftyPlugins | post-ready.maintenance.total | 4795.9ms | 4839.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4761.3ms | 4801.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4565.9ms | 4601.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4565.0ms | 4600.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4885.1ms | 4930.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4789.0ms | 4835.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4752.4ms | 4797.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4544.5ms | 4586.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4543.4ms | 4585.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10381.0ms | 0.000 | 2413.5MB | 1110.7MB | -1302.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9956.0ms | 0.201 | 848.7MB | 1079.6MB | 230.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9775.0ms | 0.205 | 829.6MB | 1082.3MB | 252.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3324.7ms | 3378.1ms | 62.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 773.5ms | 778.2ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 106.7ms |

## Observations

No data.

