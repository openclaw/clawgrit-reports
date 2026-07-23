# OpenClaw Source Performance

Generated: 2026-07-23T14:17:20.638Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8381.5ms | 8675.6ms | 8381.3ms | 4023.5ms | 8229.5ms | 63.5ms | 912.1MB | 1.312 |
| skipChannels | gateway, skip channels | 9397.6ms | 9569.4ms | 9397.5ms | 4439.5ms | 4495.1ms | 60.5ms | 928.2MB | 1.383 |
| oneInternalHook | gateway, one configured internal hook | 9327.7ms | 9791.7ms | 9327.8ms | 6204.7ms | 6294.6ms | 64.9ms | 969.6MB | 1.328 |
| allInternalHooks | gateway, all internal hooks | 4815.3ms | 7980.7ms | 4809.2ms | 4734.1ms | 4777.7ms | 45.8ms | 963.4MB | 1.286 |
| fiftyPlugins | gateway, 50 manifest plugins | 8960.3ms | 9498.6ms | 8960.2ms | 4343.5ms | 4424.9ms | 43.5ms | 1146.3MB | 1.262 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8314.1ms | 8604.8ms | 8314.1ms | 4024.6ms | 4113.9ms | 43.5ms | 1139.4MB | 1.209 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 531.2MB | 484.8MB | ok |
| zoom-meetings | 514.2MB | 467.7MB | ok |
| codex | 510.9MB | 464.4MB | ok |
| workboard | 509.9MB | 463.5MB | ok |
| teams-meetings | 509.2MB | 462.7MB | ok |
| llm-task | 506.3MB | 459.9MB | ok |
| voice-call | 505.0MB | 458.6MB | ok |
| google-meet | 504.7MB | 458.3MB | ok |
| active-memory | 504.3MB | 457.8MB | ok |
| anthropic | 504.2MB | 457.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5536.4ms | 5671.1ms |
| default | post-ready.agent-runtime-plugins.total | 5509.8ms | 5641.1ms |
| default | post-attach.update-check.total | 5504.7ms | 5635.9ms |
| default | post-attach.update-sentinel.total | 5489.2ms | 5620.6ms |
| default | sidecars.restart-sentinel.total | 5487.1ms | 5619.0ms |
| skipChannels | sidecars.session-locks.total | 6336.2ms | 6573.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 6331.6ms | 6363.9ms |
| skipChannels | post-attach.update-sentinel.total | 6309.7ms | 6343.0ms |
| skipChannels | sidecars.restart-sentinel.total | 6307.9ms | 6340.9ms |
| skipChannels | sidecars.ready.total | 6264.6ms | 6306.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4897.0ms | 5070.8ms |
| oneInternalHook | sidecars.session-locks.total | 3990.8ms | 4218.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3984.0ms | 4216.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3965.2ms | 4201.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3962.4ms | 4199.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3725.5ms | 4098.4ms |
| allInternalHooks | sidecars.session-locks.total | 3436.7ms | 3436.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3434.9ms | 3434.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3424.1ms | 3424.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3422.9ms | 3422.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5198.1ms | 5391.1ms |
| fiftyPlugins | post-ready.maintenance.total | 5102.8ms | 5270.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5065.7ms | 5221.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4855.6ms | 4943.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4854.7ms | 4942.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4763.5ms | 4833.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4671.8ms | 4707.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4636.0ms | 4655.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4397.3ms | 4429.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4396.5ms | 4428.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11317.0ms | 0.000 | 2352.3MB | 961.9MB | -1390.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12198.0ms | 0.164 | 871.0MB | 952.8MB | 81.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10900.0ms | 0.183 | 870.9MB | 938.5MB | 67.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4240.4ms | 4330.3ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 881.0ms | 942.2ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 59.5ms |

## Observations

No data.

