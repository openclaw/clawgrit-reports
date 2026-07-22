# OpenClaw Source Performance

Generated: 2026-07-22T21:48:30.498Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6540.8ms | 6938.4ms | 6540.7ms | 2945.6ms | 6391.5ms | 48.5ms | 896.6MB | 1.321 |
| skipChannels | gateway, skip channels | 6265.1ms | 7003.9ms | 6264.2ms | 3164.2ms | 3218.6ms | 46.7ms | 896.1MB | 1.536 |
| oneInternalHook | gateway, one configured internal hook | 6789.4ms | 7085.6ms | 6789.1ms | 4249.6ms | 4306.4ms | 43.6ms | 951.6MB | 1.326 |
| allInternalHooks | gateway, all internal hooks | 7087.0ms | 7109.1ms | 7086.9ms | 4693.1ms | 4766.5ms | 50.1ms | 954.1MB | 1.280 |
| fiftyPlugins | gateway, 50 manifest plugins | 7847.3ms | 8282.2ms | 7847.3ms | 4647.0ms | 4744.6ms | 48.3ms | 1150.4MB | 1.328 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10315.6ms | 10575.9ms | 10315.7ms | 5429.8ms | 5558.8ms | 61.8ms | 1137.8MB | 1.357 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 517.6MB | 471.0MB | ok |
| active-memory | 515.9MB | 469.4MB | ok |
| zoom-meetings | 511.9MB | 465.3MB | ok |
| llm-task | 507.0MB | 460.4MB | ok |
| workboard | 506.7MB | 460.1MB | ok |
| anthropic | 506.0MB | 459.4MB | ok |
| codex | 505.8MB | 459.2MB | ok |
| migrate-hermes | 505.4MB | 458.9MB | ok |
| google-meet | 503.6MB | 457.0MB | ok |
| voice-call | 502.5MB | 455.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4446.1ms | 4482.2ms |
| default | post-ready.agent-runtime-plugins.total | 4417.1ms | 4453.8ms |
| default | post-attach.update-check.total | 4412.6ms | 4449.6ms |
| default | post-attach.update-sentinel.total | 4397.5ms | 4438.1ms |
| default | sidecars.restart-sentinel.total | 4395.8ms | 4436.1ms |
| skipChannels | sidecars.session-locks.total | 4243.4ms | 4503.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4241.1ms | 4501.0ms |
| skipChannels | post-attach.update-sentinel.total | 4226.6ms | 4483.1ms |
| skipChannels | sidecars.restart-sentinel.total | 4225.2ms | 4481.5ms |
| skipChannels | sidecars.ready.total | 4202.6ms | 4456.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3297.7ms | 3363.1ms |
| oneInternalHook | sidecars.session-locks.total | 3175.7ms | 3390.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3173.0ms | 3388.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3162.6ms | 3378.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3161.3ms | 3377.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3653.4ms | 3695.9ms |
| allInternalHooks | sidecars.session-locks.total | 3109.6ms | 3126.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3106.6ms | 3123.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 3094.8ms | 3111.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3093.5ms | 3109.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4188.1ms | 4493.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4110.7ms | 4406.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4095.7ms | 4391.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3888.5ms | 4020.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3887.5ms | 4019.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5572.7ms | 5864.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5468.5ms | 5752.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5444.8ms | 5730.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4552.8ms | 4767.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4551.2ms | 4765.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12017.0ms | 0.000 | 2458.8MB | 950.3MB | -1508.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11003.0ms | 0.182 | 856.9MB | 940.3MB | 83.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11020.0ms | 0.181 | 850.6MB | 929.6MB | 78.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3900.3ms | 4630.2ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 801.7ms | 807.1ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 74.5ms |

## Observations

No data.

