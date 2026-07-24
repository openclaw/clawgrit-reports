# OpenClaw Source Performance

Generated: 2026-07-24T03:41:32.874Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6190.9ms | 6280.6ms | 6183.0ms | 3107.9ms | 6071.3ms | 44.6ms | 925.9MB | 1.294 |
| skipChannels | gateway, skip channels | 7119.0ms | 7629.7ms | 6732.0ms | 3656.4ms | 3704.1ms | 47.2ms | 925.1MB | 1.337 |
| oneInternalHook | gateway, one configured internal hook | 5035.0ms | 7540.9ms | 5034.6ms | 4947.5ms | 4997.2ms | 47.8ms | 945.7MB | 1.390 |
| allInternalHooks | gateway, all internal hooks | 4922.8ms | 5449.7ms | 4922.8ms | 4832.4ms | 4874.6ms | 42.9ms | 931.5MB | 1.289 |
| fiftyPlugins | gateway, 50 manifest plugins | 8312.2ms | 8479.7ms | 8312.2ms | 4222.6ms | 4295.3ms | 39.5ms | 1117.3MB | 1.239 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8330.0ms | 8437.8ms | 8329.9ms | 4002.5ms | 4095.0ms | 43.2ms | 1113.2MB | 1.213 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 516.3MB | 469.8MB | ok |
| codex | 513.9MB | 467.4MB | ok |
| anthropic | 512.2MB | 465.8MB | ok |
| llm-task | 508.3MB | 461.8MB | ok |
| teams-meetings | 507.9MB | 461.4MB | ok |
| zoom-meetings | 506.5MB | 460.0MB | ok |
| workboard | 506.4MB | 460.0MB | ok |
| google-meet | 504.4MB | 457.9MB | ok |
| voice-call | 504.1MB | 457.7MB | ok |
| xai | 502.4MB | 455.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3963.6ms | 4053.6ms |
| default | post-ready.agent-runtime-plugins.total | 3943.7ms | 4033.9ms |
| default | post-attach.update-check.total | 3941.2ms | 4030.9ms |
| default | post-attach.update-sentinel.total | 3932.6ms | 4021.6ms |
| default | sidecars.restart-sentinel.total | 3931.4ms | 4020.3ms |
| skipChannels | sidecars.session-locks.total | 4428.3ms | 4920.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4426.1ms | 4918.2ms |
| skipChannels | post-attach.update-sentinel.total | 4421.6ms | 4911.6ms |
| skipChannels | sidecars.restart-sentinel.total | 4420.3ms | 4910.4ms |
| skipChannels | sidecars.ready.total | 4406.0ms | 4889.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3807.7ms | 3823.9ms |
| oneInternalHook | sidecars.session-locks.total | 3338.7ms | 3338.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3337.0ms | 3337.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 3326.5ms | 3326.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3325.4ms | 3325.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3764.7ms | 4113.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3015.0ms | 3124.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2981.1ms | 3085.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2980.2ms | 3084.4ms |
| allInternalHooks | sidecars.internal-hooks.total | 863.9ms | 1006.2ms |
| fiftyPlugins | sidecars.session-locks.total | 4899.0ms | 4984.0ms |
| fiftyPlugins | post-ready.maintenance.total | 4810.3ms | 4893.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4772.2ms | 4855.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4569.1ms | 4624.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4568.1ms | 4623.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4804.4ms | 4949.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4715.0ms | 4852.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4679.3ms | 4815.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4477.7ms | 4609.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4476.9ms | 4608.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10327.0ms | 0.000 | 2456.9MB | 959.7MB | -1497.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9552.0ms | 0.105 | 821.3MB | 1016.3MB | 195.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9532.0ms | 0.105 | 879.6MB | 941.2MB | 61.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3266.9ms | 3295.5ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 736.6ms | 772.3ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 61.1ms |

## Observations

No data.

