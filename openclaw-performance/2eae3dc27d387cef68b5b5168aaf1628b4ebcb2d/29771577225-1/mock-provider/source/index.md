# OpenClaw Source Performance

Generated: 2026-07-20T19:27:40.340Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 10505.1ms | 11834.6ms | 10504.8ms | 4146.1ms | 10225.8ms | 67.6ms | 823.3MB | 1.352 |
| skipChannels | gateway, skip channels | 8541.2ms | 10252.1ms | 3518.0ms | 3315.1ms | 3373.5ms | 61.6ms | 854.9MB | 1.298 |
| oneInternalHook | gateway, one configured internal hook | 8864.3ms | 9033.9ms | 8864.4ms | 4866.9ms | 4921.0ms | 55.0ms | 1057.0MB | 1.243 |
| allInternalHooks | gateway, all internal hooks | 3742.5ms | 3861.6ms | 3742.2ms | 3667.0ms | 3711.9ms | 40.8ms | 835.5MB | 1.343 |
| fiftyPlugins | gateway, 50 manifest plugins | 6129.2ms | 6443.4ms | 6129.2ms | 3939.2ms | 4020.3ms | 37.8ms | 893.5MB | 1.242 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6271.4ms | 6448.9ms | 6271.3ms | 3923.5ms | 4013.2ms | 46.3ms | 882.8MB | 1.300 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 505.7MB | 459.6MB | ok |
| google-meet | 502.4MB | 456.3MB | ok |
| xai | 492.5MB | 446.4MB | ok |
| anthropic | 490.6MB | 444.5MB | ok |
| codex | 469.0MB | 422.9MB | ok |
| memory-lancedb | 462.4MB | 416.3MB | ok |
| zoom-meetings | 461.5MB | 415.4MB | ok |
| workboard | 451.2MB | 405.1MB | ok |
| voice-call | 431.9MB | 385.9MB | ok |
| active-memory | 428.2MB | 382.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.maintenance.total | 8214.2ms | 8214.2ms |
| default | sidecars.session-locks.total | 7691.8ms | 7922.4ms |
| default | post-ready.agent-runtime-plugins.total | 7671.2ms | 7817.4ms |
| default | post-attach.update-check.total | 7661.8ms | 7805.7ms |
| default | post-attach.update-sentinel.total | 7639.8ms | 7782.7ms |
| skipChannels | sidecars.session-locks.total | 7616.5ms | 7616.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 7612.6ms | 7612.6ms |
| skipChannels | post-attach.update-sentinel.total | 7605.2ms | 7605.2ms |
| skipChannels | sidecars.restart-sentinel.total | 7603.4ms | 7603.4ms |
| skipChannels | sidecars.ready.total | 6447.6ms | 7578.0ms |
| oneInternalHook | sidecars.session-locks.total | 4882.1ms | 4926.5ms |
| oneInternalHook | sidecars.ready.total | 4880.4ms | 4960.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4879.2ms | 4923.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 4872.7ms | 4915.1ms |
| oneInternalHook | sidecars.total.total | 4872.2ms | 4954.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2889.9ms | 2987.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2316.8ms | 2420.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2295.3ms | 2397.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2294.4ms | 2396.7ms |
| allInternalHooks | memory.ready.rssMb | 723.5ms | 723.8ms |
| fiftyPlugins | sidecars.session-locks.total | 2950.4ms | 3068.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2944.0ms | 3064.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2917.0ms | 3111.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2769.6ms | 2892.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2768.5ms | 2891.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3074.1ms | 3310.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2817.5ms | 2968.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2813.3ms | 2964.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2633.7ms | 2734.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2632.7ms | 2732.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10335.0ms | 0.000 | 2358.2MB | 892.8MB | -1465.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10130.0ms | 0.197 | 785.9MB | 874.0MB | 88.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10317.0ms | 0.194 | 803.8MB | 888.7MB | 84.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3377.7ms | 3415.7ms | 59.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 740.4ms | 748.1ms | 59.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 66.7ms |

## Observations

No data.

