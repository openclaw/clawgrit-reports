# OpenClaw Source Performance

Generated: 2026-07-26T03:45:25.907Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6205.5ms | 6206.0ms | 6205.5ms | 3203.2ms | 6077.7ms | 43.1ms | 1051.7MB | 1.311 |
| skipChannels | gateway, skip channels | 6064.7ms | 6260.3ms | 3271.6ms | 3113.2ms | 3151.9ms | 42.5ms | 993.0MB | 1.319 |
| oneInternalHook | gateway, one configured internal hook | 6817.9ms | 6844.9ms | 6765.4ms | 4589.9ms | 4634.9ms | 43.7ms | 1170.4MB | 1.317 |
| allInternalHooks | gateway, all internal hooks | 6791.8ms | 6799.0ms | 6791.8ms | 4561.2ms | 4603.9ms | 42.3ms | 1178.4MB | 1.283 |
| fiftyPlugins | gateway, 50 manifest plugins | 8368.8ms | 8551.2ms | 8368.7ms | 4424.1ms | 4500.0ms | 42.6ms | 1133.9MB | 1.200 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8156.8ms | 8231.6ms | 8156.8ms | 4116.3ms | 4201.1ms | 42.7ms | 1115.4MB | 1.231 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 543.5MB | 497.1MB | ok |
| active-memory | 537.5MB | 491.1MB | ok |
| opencode | 519.5MB | 473.0MB | ok |
| codex | 511.7MB | 465.2MB | ok |
| voice-call | 510.9MB | 464.5MB | ok |
| migrate-hermes | 509.0MB | 462.6MB | ok |
| anthropic | 507.2MB | 460.8MB | ok |
| llm-task | 506.7MB | 460.3MB | ok |
| workboard | 505.9MB | 459.4MB | ok |
| xai | 505.6MB | 459.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3898.7ms | 3939.5ms |
| default | post-ready.agent-runtime-plugins.total | 3874.7ms | 3915.8ms |
| default | post-attach.update-check.total | 3872.2ms | 3913.3ms |
| default | post-attach.update-sentinel.total | 3863.4ms | 3904.7ms |
| default | sidecars.restart-sentinel.total | 3862.3ms | 3903.7ms |
| skipChannels | sidecars.session-locks.total | 3998.8ms | 4087.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3995.8ms | 4084.5ms |
| skipChannels | post-attach.update-sentinel.total | 3991.3ms | 4079.6ms |
| skipChannels | sidecars.restart-sentinel.total | 3990.3ms | 4078.6ms |
| skipChannels | sidecars.ready.total | 3977.8ms | 4065.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3450.4ms | 3452.3ms |
| oneInternalHook | sidecars.session-locks.total | 3053.0ms | 3064.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3051.6ms | 3062.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3047.4ms | 3058.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3046.5ms | 3057.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3419.9ms | 3463.9ms |
| allInternalHooks | sidecars.session-locks.total | 3043.2ms | 3055.9ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3041.4ms | 3054.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 3037.3ms | 3049.8ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3036.2ms | 3048.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4861.6ms | 4916.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4772.1ms | 4826.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4735.3ms | 4792.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4535.8ms | 4589.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4534.7ms | 4588.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4686.8ms | 4730.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4601.4ms | 4643.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4568.8ms | 4610.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4375.8ms | 4412.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4374.8ms | 4412.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10826.0ms | 0.000 | 2477.9MB | 1053.2MB | -1424.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10357.0ms | 0.097 | 869.5MB | 1031.4MB | 161.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10798.0ms | 0.185 | 956.7MB | 979.3MB | 22.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3464.4ms | 3465.9ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 875.6ms | 894.6ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 130.2ms |

## Observations

No data.

