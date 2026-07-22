# OpenClaw Source Performance

Generated: 2026-07-22T17:19:57.633Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6087.3ms | 6832.1ms | 6087.2ms | 2936.5ms | 5940.2ms | 46.6ms | 907.6MB | 1.313 |
| skipChannels | gateway, skip channels | 3283.6ms | 3626.4ms | 3283.3ms | 3193.7ms | 3245.0ms | 50.2ms | 850.3MB | 1.523 |
| oneInternalHook | gateway, one configured internal hook | 6953.0ms | 6968.1ms | 6953.0ms | 4400.1ms | 4446.0ms | 44.9ms | 957.3MB | 1.394 |
| allInternalHooks | gateway, all internal hooks | 7792.5ms | 8732.2ms | 7792.5ms | 5030.1ms | 5094.7ms | 50.7ms | 950.6MB | 1.283 |
| fiftyPlugins | gateway, 50 manifest plugins | 8671.2ms | 8739.4ms | 8671.2ms | 5097.4ms | 5198.4ms | 53.5ms | 1115.7MB | 1.279 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7293.2ms | 7332.1ms | 7293.2ms | 4061.0ms | 4151.4ms | 45.4ms | 1132.1MB | 1.243 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 516.3MB | 469.8MB | ok |
| google-meet | 514.0MB | 467.5MB | ok |
| teams-meetings | 511.5MB | 465.0MB | ok |
| memory-lancedb | 507.8MB | 461.3MB | ok |
| migrate-hermes | 507.0MB | 460.5MB | ok |
| workboard | 506.7MB | 460.3MB | ok |
| codex | 506.6MB | 460.1MB | ok |
| voice-call | 504.8MB | 458.3MB | ok |
| active-memory | 503.9MB | 457.4MB | ok |
| llm-task | 503.1MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4012.3ms | 4457.0ms |
| default | post-ready.agent-runtime-plugins.total | 3985.2ms | 4434.2ms |
| default | post-attach.update-check.total | 3981.9ms | 4429.8ms |
| default | post-attach.update-sentinel.total | 3971.0ms | 4418.0ms |
| default | sidecars.restart-sentinel.total | 3969.4ms | 4416.6ms |
| skipChannels | sidecars.internal-hooks.total | 986.5ms | 1011.4ms |
| skipChannels | post-attach.update-check.total | 924.5ms | 934.4ms |
| skipChannels | ready.total | 908.8ms | 920.3ms |
| skipChannels | runtime.post-attach.total | 907.3ms | 918.8ms |
| skipChannels | post-attach.log.total | 906.2ms | 917.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3370.8ms | 3373.5ms |
| oneInternalHook | sidecars.session-locks.total | 3266.9ms | 3270.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3264.4ms | 3268.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 3256.3ms | 3263.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3255.3ms | 3262.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3809.3ms | 4075.5ms |
| allInternalHooks | post-ready.maintenance.total | 3686.2ms | 4423.7ms |
| allInternalHooks | sidecars.session-locks.total | 3488.3ms | 4538.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3485.5ms | 4317.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3474.5ms | 4228.2ms |
| fiftyPlugins | sidecars.session-locks.total | 4608.2ms | 4688.8ms |
| fiftyPlugins | post-ready.maintenance.total | 4517.4ms | 4604.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4503.1ms | 4590.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4258.5ms | 4274.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4257.2ms | 4273.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3756.1ms | 3814.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3678.4ms | 3737.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3664.9ms | 3724.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3420.3ms | 3445.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3419.0ms | 3444.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10030.0ms | 0.000 | 2419.7MB | 963.6MB | -1456.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9740.0ms | 0.205 | 862.7MB | 941.8MB | 79.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9541.0ms | 0.105 | 796.4MB | 1015.8MB | 219.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3530.7ms | 3603.2ms | 61.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 865.5ms | 905.1ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 75.4ms |

## Observations

No data.

