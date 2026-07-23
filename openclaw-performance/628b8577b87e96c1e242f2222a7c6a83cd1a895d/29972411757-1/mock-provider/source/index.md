# OpenClaw Source Performance

Generated: 2026-07-23T01:46:39.312Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5684.0ms | 5689.7ms | 5657.6ms | 2823.8ms | 5575.0ms | 40.8ms | 1049.3MB | 1.237 |
| skipChannels | gateway, skip channels | 2949.4ms | 5634.3ms | 2949.0ms | 2838.4ms | 2881.0ms | 42.9ms | 910.0MB | 1.368 |
| oneInternalHook | gateway, one configured internal hook | 4294.2ms | 6446.8ms | 4294.0ms | 4125.9ms | 4184.8ms | 42.2ms | 960.9MB | 1.241 |
| allInternalHooks | gateway, all internal hooks | 4179.8ms | 6330.3ms | 4179.4ms | 4104.3ms | 4144.7ms | 41.7ms | 952.4MB | 1.264 |
| fiftyPlugins | gateway, 50 manifest plugins | 8175.2ms | 8181.0ms | 8175.2ms | 4087.4ms | 4167.3ms | 40.2ms | 1146.2MB | 1.240 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7805.3ms | 7836.9ms | 7805.3ms | 3797.5ms | 3882.6ms | 41.5ms | 1126.4MB | 1.281 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 514.5MB | 468.1MB | ok |
| codex | 512.4MB | 466.0MB | ok |
| active-memory | 508.9MB | 462.4MB | ok |
| google-meet | 506.7MB | 460.2MB | ok |
| llm-task | 506.2MB | 459.7MB | ok |
| workboard | 505.6MB | 459.1MB | ok |
| teams-meetings | 505.6MB | 459.1MB | ok |
| migrate-hermes | 504.7MB | 458.2MB | ok |
| memory-lancedb | 504.2MB | 457.8MB | ok |
| anthropic | 504.1MB | 457.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3528.7ms | 3620.6ms |
| default | post-ready.agent-runtime-plugins.total | 3508.5ms | 3602.7ms |
| default | post-attach.update-check.total | 3506.2ms | 3600.4ms |
| default | post-attach.update-sentinel.total | 3498.8ms | 3592.7ms |
| default | sidecars.restart-sentinel.total | 3497.8ms | 3591.6ms |
| skipChannels | sidecars.session-locks.total | 3545.0ms | 3545.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3542.6ms | 3542.6ms |
| skipChannels | post-attach.update-sentinel.total | 3533.0ms | 3533.0ms |
| skipChannels | sidecars.restart-sentinel.total | 3531.9ms | 3531.9ms |
| skipChannels | sidecars.ready.total | 3512.4ms | 3512.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3198.6ms | 3271.5ms |
| oneInternalHook | sidecars.session-locks.total | 2932.7ms | 2932.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2930.5ms | 2930.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 2926.3ms | 2926.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2925.3ms | 2925.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3180.4ms | 3303.4ms |
| allInternalHooks | sidecars.session-locks.total | 2700.5ms | 2700.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2698.4ms | 2698.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 2689.1ms | 2689.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2688.2ms | 2688.2ms |
| fiftyPlugins | sidecars.session-locks.total | 4840.2ms | 4855.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4748.8ms | 4762.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4714.2ms | 4725.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4519.6ms | 4523.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4518.8ms | 4522.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4498.2ms | 4508.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4412.4ms | 4421.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4374.7ms | 4386.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4182.6ms | 4190.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4181.8ms | 4190.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10042.0ms | 0.000 | 2428.1MB | 964.5MB | -1463.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9899.0ms | 0.101 | 865.0MB | 935.6MB | 70.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9552.0ms | 0.105 | 820.2MB | 1011.3MB | 191.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3295.8ms | 3473.7ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 901.5ms | 912.0ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 61.5ms |

## Observations

No data.

