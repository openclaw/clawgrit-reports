# OpenClaw Source Performance

Generated: 2026-07-25T20:28:14.804Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6296.1ms | 6373.5ms | 6296.0ms | 3277.4ms | 6173.6ms | 40.8ms | 1091.8MB | 1.273 |
| skipChannels | gateway, skip channels | 6359.8ms | 6537.5ms | 6359.7ms | 3224.2ms | 3268.4ms | 40.7ms | 999.8MB | 1.279 |
| oneInternalHook | gateway, one configured internal hook | 7008.0ms | 7015.6ms | 7007.9ms | 4691.8ms | 4735.8ms | 41.6ms | 1241.9MB | 1.284 |
| allInternalHooks | gateway, all internal hooks | 7074.4ms | 7076.8ms | 7048.4ms | 4720.9ms | 4765.3ms | 40.9ms | 1194.6MB | 1.299 |
| fiftyPlugins | gateway, 50 manifest plugins | 8442.2ms | 8496.2ms | 8442.1ms | 4433.4ms | 4514.2ms | 42.3ms | 1138.2MB | 1.191 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8316.6ms | 8325.6ms | 8316.6ms | 4087.1ms | 4175.1ms | 40.7ms | 1135.8MB | 1.212 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 542.3MB | 495.8MB | ok |
| opencode | 515.0MB | 468.5MB | ok |
| zoom-meetings | 514.1MB | 467.7MB | ok |
| teams-meetings | 512.0MB | 465.5MB | ok |
| voice-call | 511.9MB | 465.4MB | ok |
| workboard | 510.0MB | 463.6MB | ok |
| anthropic | 509.8MB | 463.3MB | ok |
| google-meet | 507.6MB | 461.2MB | ok |
| active-memory | 507.4MB | 460.9MB | ok |
| llm-task | 506.4MB | 459.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3981.0ms | 4043.4ms |
| default | post-ready.agent-runtime-plugins.total | 3953.9ms | 4016.7ms |
| default | post-attach.update-check.total | 3951.2ms | 4013.3ms |
| default | post-attach.update-sentinel.total | 3941.5ms | 4002.2ms |
| default | sidecars.restart-sentinel.total | 3940.4ms | 4001.0ms |
| skipChannels | sidecars.session-locks.total | 4190.5ms | 4203.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4188.5ms | 4198.6ms |
| skipChannels | post-attach.update-sentinel.total | 4182.9ms | 4194.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4181.6ms | 4192.9ms |
| skipChannels | sidecars.ready.total | 4160.6ms | 4179.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3525.8ms | 3530.0ms |
| oneInternalHook | sidecars.session-locks.total | 3147.9ms | 3149.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3142.3ms | 3144.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3135.1ms | 3139.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3134.0ms | 3138.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3529.0ms | 3637.2ms |
| allInternalHooks | sidecars.session-locks.total | 3157.6ms | 3160.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3156.1ms | 3159.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 3151.6ms | 3154.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3150.6ms | 3153.9ms |
| fiftyPlugins | sidecars.session-locks.total | 4960.5ms | 5005.0ms |
| fiftyPlugins | post-ready.maintenance.total | 4864.1ms | 4907.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4827.9ms | 4871.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4626.1ms | 4663.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4625.2ms | 4662.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4851.8ms | 4878.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4757.6ms | 4779.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4722.8ms | 4743.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4526.7ms | 4537.0ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4525.8ms | 4536.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10986.0ms | 0.000 | 2565.6MB | 982.9MB | -1582.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10312.0ms | 0.097 | 867.5MB | 1011.7MB | 144.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10829.0ms | 0.185 | 957.6MB | 993.8MB | 36.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3416.1ms | 3424.9ms | 62.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 877.0ms | 878.8ms | 61.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 128.3ms |

## Observations

No data.

