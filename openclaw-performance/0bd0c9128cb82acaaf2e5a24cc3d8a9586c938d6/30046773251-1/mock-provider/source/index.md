# OpenClaw Source Performance

Generated: 2026-07-23T21:42:47.712Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6020.5ms | 6686.0ms | 6020.4ms | 3024.3ms | 5919.7ms | 42.2ms | 921.5MB | 1.335 |
| skipChannels | gateway, skip channels | 7986.6ms | 8370.1ms | 7986.5ms | 4043.2ms | 4091.8ms | 52.2ms | 938.6MB | 1.377 |
| oneInternalHook | gateway, one configured internal hook | 9094.3ms | 9100.6ms | 9094.2ms | 5600.2ms | 5670.4ms | 48.7ms | 975.6MB | 1.320 |
| allInternalHooks | gateway, all internal hooks | 8968.4ms | 11492.2ms | 8968.3ms | 5938.4ms | 6060.7ms | 62.1ms | 1091.2MB | 1.338 |
| fiftyPlugins | gateway, 50 manifest plugins | 9900.4ms | 9975.4ms | 9900.4ms | 4806.9ms | 4907.9ms | 49.4ms | 1130.2MB | 1.247 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9344.0ms | 9763.2ms | 9343.9ms | 4447.6ms | 4551.2ms | 50.6ms | 1129.1MB | 1.284 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 529.0MB | 482.8MB | ok |
| active-memory | 510.3MB | 464.0MB | ok |
| codex | 508.5MB | 462.3MB | ok |
| workboard | 508.5MB | 462.3MB | ok |
| xai | 507.2MB | 460.9MB | ok |
| anthropic | 507.0MB | 460.8MB | ok |
| migrate-hermes | 505.3MB | 459.1MB | ok |
| voice-call | 504.9MB | 458.7MB | ok |
| google-meet | 504.5MB | 458.2MB | ok |
| llm-task | 501.9MB | 455.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3836.4ms | 4274.9ms |
| default | post-ready.agent-runtime-plugins.total | 3817.6ms | 4253.3ms |
| default | post-attach.update-check.total | 3815.0ms | 4249.9ms |
| default | post-attach.update-sentinel.total | 3806.4ms | 4240.4ms |
| default | sidecars.restart-sentinel.total | 3805.3ms | 4239.2ms |
| skipChannels | sidecars.session-locks.total | 5213.6ms | 5543.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5210.0ms | 5540.3ms |
| skipChannels | post-attach.update-sentinel.total | 5200.4ms | 5528.5ms |
| skipChannels | sidecars.restart-sentinel.total | 5198.1ms | 5527.2ms |
| skipChannels | sidecars.ready.total | 5153.7ms | 5506.2ms |
| oneInternalHook | sidecars.session-locks.total | 4140.2ms | 4498.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4139.1ms | 4436.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4137.5ms | 4495.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 4124.3ms | 4480.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 4122.8ms | 4479.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4536.1ms | 6130.3ms |
| allInternalHooks | sidecars.session-locks.total | 3961.3ms | 4728.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3958.7ms | 4722.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3946.2ms | 4697.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3945.0ms | 4695.0ms |
| fiftyPlugins | sidecars.session-locks.total | 6013.4ms | 6037.3ms |
| fiftyPlugins | post-ready.maintenance.total | 5914.0ms | 5930.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5870.8ms | 5888.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5641.5ms | 5647.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5640.2ms | 5646.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5512.7ms | 5767.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5413.1ms | 5653.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5374.1ms | 5612.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5146.3ms | 5377.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5145.3ms | 5376.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10419.0ms | 0.000 | 2431.0MB | 1054.0MB | -1376.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9650.0ms | 0.207 | 825.4MB | 1016.0MB | 190.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10243.0ms | 0.098 | 797.3MB | 1018.0MB | 220.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3585.2ms | 3973.5ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 832.0ms | 834.5ms | 62.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 70.2ms |

## Observations

No data.

