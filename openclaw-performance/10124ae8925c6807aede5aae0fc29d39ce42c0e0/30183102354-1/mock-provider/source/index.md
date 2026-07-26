# OpenClaw Source Performance

Generated: 2026-07-26T01:40:22.109Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6148.9ms | 6161.2ms | 6149.0ms | 3144.9ms | 6025.1ms | 43.3ms | 1051.3MB | 1.324 |
| skipChannels | gateway, skip channels | 6280.3ms | 6284.1ms | 6280.2ms | 3166.5ms | 3206.3ms | 42.5ms | 1016.1MB | 1.298 |
| oneInternalHook | gateway, one configured internal hook | 4652.0ms | 6835.9ms | 4651.3ms | 4564.1ms | 4605.5ms | 41.6ms | 1169.3MB | 1.317 |
| allInternalHooks | gateway, all internal hooks | 6718.8ms | 6844.5ms | 6718.7ms | 4537.9ms | 4577.8ms | 41.3ms | 1170.8MB | 1.298 |
| fiftyPlugins | gateway, 50 manifest plugins | 8352.4ms | 8364.6ms | 8352.3ms | 4372.2ms | 4443.9ms | 39.0ms | 1135.4MB | 1.221 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8094.5ms | 8210.5ms | 8094.5ms | 4111.4ms | 4191.6ms | 43.8ms | 1110.4MB | 1.246 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 521.9MB | 475.5MB | ok |
| zoom-meetings | 517.4MB | 470.9MB | ok |
| codex | 516.1MB | 469.7MB | ok |
| anthropic | 508.1MB | 461.6MB | ok |
| teams-meetings | 508.0MB | 461.6MB | ok |
| active-memory | 508.0MB | 461.5MB | ok |
| google-meet | 507.0MB | 460.5MB | ok |
| llm-task | 506.7MB | 460.2MB | ok |
| migrate-hermes | 505.5MB | 459.0MB | ok |
| acpx | 505.1MB | 458.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3906.0ms | 3946.1ms |
| default | post-ready.agent-runtime-plugins.total | 3892.0ms | 3922.4ms |
| default | post-attach.update-check.total | 3889.3ms | 3919.9ms |
| default | post-attach.update-sentinel.total | 3879.6ms | 3909.9ms |
| default | sidecars.restart-sentinel.total | 3878.4ms | 3908.7ms |
| skipChannels | sidecars.session-locks.total | 4048.2ms | 4065.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4036.7ms | 4063.3ms |
| skipChannels | post-attach.update-sentinel.total | 4032.4ms | 4059.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4031.5ms | 4058.0ms |
| skipChannels | sidecars.ready.total | 4016.8ms | 4045.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3426.2ms | 3456.5ms |
| oneInternalHook | sidecars.session-locks.total | 3067.2ms | 3067.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3065.5ms | 3065.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 3061.2ms | 3061.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3060.1ms | 3060.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3413.5ms | 3439.2ms |
| allInternalHooks | sidecars.session-locks.total | 3053.8ms | 3062.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3052.1ms | 3060.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3047.8ms | 3055.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3046.8ms | 3054.8ms |
| fiftyPlugins | sidecars.session-locks.total | 4860.9ms | 4891.0ms |
| fiftyPlugins | post-ready.maintenance.total | 4771.2ms | 4800.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4737.3ms | 4763.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4538.1ms | 4563.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4537.1ms | 4562.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4603.9ms | 4702.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4512.2ms | 4614.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4474.3ms | 4581.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4270.6ms | 4387.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4269.6ms | 4386.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10957.0ms | 0.000 | 2494.7MB | 1046.3MB | -1448.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10313.0ms | 0.097 | 863.9MB | 1043.5MB | 179.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10343.0ms | 0.097 | 948.1MB | 978.4MB | 30.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3404.2ms | 3513.9ms | 61.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 810.4ms | 828.6ms | 62.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 124.3ms |

## Observations

No data.

