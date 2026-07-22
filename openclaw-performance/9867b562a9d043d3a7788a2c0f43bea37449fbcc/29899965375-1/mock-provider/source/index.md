# OpenClaw Source Performance

Generated: 2026-07-22T07:29:03.125Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6435.0ms | 6809.2ms | 6434.6ms | 3304.4ms | 6303.0ms | 51.1ms | 907.3MB | 1.322 |
| skipChannels | gateway, skip channels | 6036.1ms | 6342.3ms | 6036.1ms | 2901.4ms | 2950.5ms | 46.7ms | 905.5MB | 1.368 |
| oneInternalHook | gateway, one configured internal hook | 4347.5ms | 7234.4ms | 4347.3ms | 4267.9ms | 4307.3ms | 41.6ms | 943.3MB | 1.380 |
| allInternalHooks | gateway, all internal hooks | 6379.1ms | 7998.4ms | 6379.0ms | 4121.6ms | 4184.4ms | 43.6ms | 968.7MB | 1.263 |
| fiftyPlugins | gateway, 50 manifest plugins | 7983.5ms | 10134.2ms | 7983.6ms | 4564.8ms | 4654.7ms | 48.3ms | 1103.2MB | 1.283 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8144.2ms | 9004.6ms | 8144.1ms | 4403.6ms | 4508.2ms | 47.7ms | 1138.0MB | 1.301 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 534.4MB | 488.0MB | ok |
| active-memory | 530.6MB | 484.2MB | ok |
| memory-lancedb | 513.6MB | 467.2MB | ok |
| google-meet | 511.4MB | 465.0MB | ok |
| codex | 509.2MB | 462.9MB | ok |
| teams-meetings | 507.8MB | 461.5MB | ok |
| migrate-hermes | 507.7MB | 461.3MB | ok |
| anthropic | 507.4MB | 461.1MB | ok |
| workboard | 505.5MB | 459.2MB | ok |
| llm-task | 504.3MB | 457.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4087.9ms | 4226.7ms |
| default | post-ready.agent-runtime-plugins.total | 4064.7ms | 4206.3ms |
| default | post-attach.update-check.total | 4061.6ms | 4200.0ms |
| default | post-attach.update-sentinel.total | 4052.1ms | 4185.5ms |
| default | sidecars.restart-sentinel.total | 4050.9ms | 4184.0ms |
| skipChannels | sidecars.session-locks.total | 4042.4ms | 4084.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4040.4ms | 4082.3ms |
| skipChannels | post-attach.update-sentinel.total | 4032.4ms | 4070.6ms |
| skipChannels | sidecars.restart-sentinel.total | 4031.4ms | 4069.3ms |
| skipChannels | sidecars.ready.total | 4014.1ms | 4049.8ms |
| oneInternalHook | sidecars.session-locks.total | 3559.4ms | 3559.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3556.4ms | 3556.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 3551.0ms | 3551.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3549.7ms | 3549.7ms |
| oneInternalHook | sidecars.ready.total | 3528.0ms | 3528.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3166.7ms | 3906.4ms |
| allInternalHooks | sidecars.session-locks.total | 2913.7ms | 3689.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2911.6ms | 3687.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 2907.0ms | 3676.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2905.9ms | 3675.3ms |
| fiftyPlugins | sidecars.session-locks.total | 4351.8ms | 6053.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4266.7ms | 5963.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4252.0ms | 5948.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3858.8ms | 5614.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3857.6ms | 5613.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4407.6ms | 4848.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4308.8ms | 4768.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4293.1ms | 4752.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3823.0ms | 4411.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3821.9ms | 4410.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10365.0ms | 0.000 | 2396.1MB | 959.4MB | -1436.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9442.0ms | 0.106 | 859.9MB | 942.8MB | 82.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9792.0ms | 0.204 | 845.8MB | 1017.8MB | 172.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3427.0ms | 3431.9ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 810.3ms | 831.9ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 63.2ms |

## Observations

No data.

