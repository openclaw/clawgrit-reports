# OpenClaw Source Performance

Generated: 2026-07-23T02:53:25.565Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5929.6ms | 5957.3ms | 5929.6ms | 2872.8ms | 5835.3ms | 39.4ms | 954.5MB | 1.229 |
| skipChannels | gateway, skip channels | 3007.4ms | 3022.3ms | 3006.9ms | 2929.5ms | 2970.8ms | 37.4ms | 859.9MB | 1.353 |
| oneInternalHook | gateway, one configured internal hook | 6499.9ms | 6653.3ms | 6499.8ms | 4285.7ms | 4336.5ms | 42.6ms | 968.7MB | 1.286 |
| allInternalHooks | gateway, all internal hooks | 6715.2ms | 6770.0ms | 6729.2ms | 4417.9ms | 4468.8ms | 41.3ms | 959.0MB | 1.192 |
| fiftyPlugins | gateway, 50 manifest plugins | 8626.0ms | 8763.0ms | 8626.0ms | 4354.3ms | 4438.4ms | 41.9ms | 1112.9MB | 1.255 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8302.2ms | 8407.6ms | 8302.2ms | 4057.5ms | 4146.6ms | 40.7ms | 1123.7MB | 1.212 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 514.4MB | 467.9MB | ok |
| active-memory | 513.0MB | 466.6MB | ok |
| teams-meetings | 511.2MB | 464.8MB | ok |
| migrate-hermes | 511.0MB | 464.5MB | ok |
| zoom-meetings | 508.4MB | 462.0MB | ok |
| workboard | 506.3MB | 459.8MB | ok |
| memory-lancedb | 506.1MB | 459.6MB | ok |
| llm-task | 505.3MB | 458.8MB | ok |
| codex | 504.2MB | 457.7MB | ok |
| voice-call | 503.6MB | 457.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3770.0ms | 3814.5ms |
| default | post-ready.agent-runtime-plugins.total | 3751.8ms | 3804.1ms |
| default | post-attach.update-check.total | 3749.0ms | 3801.5ms |
| default | post-attach.update-sentinel.total | 3740.5ms | 3792.1ms |
| default | sidecars.restart-sentinel.total | 3739.3ms | 3790.9ms |
| skipChannels | sidecars.internal-hooks.total | 883.2ms | 897.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 849.8ms | 860.6ms |
| skipChannels | post-attach.update-check.total | 830.0ms | 842.1ms |
| skipChannels | ready.total | 812.0ms | 826.9ms |
| skipChannels | runtime.post-attach.total | 810.4ms | 825.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3332.4ms | 3336.3ms |
| oneInternalHook | sidecars.session-locks.total | 2833.3ms | 2981.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2831.2ms | 2979.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 2821.4ms | 2969.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2820.5ms | 2968.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3441.6ms | 3450.0ms |
| allInternalHooks | sidecars.session-locks.total | 2957.4ms | 2995.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2955.1ms | 2992.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 2945.8ms | 2984.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2944.8ms | 2983.0ms |
| fiftyPlugins | sidecars.session-locks.total | 5056.4ms | 5199.4ms |
| fiftyPlugins | post-ready.maintenance.total | 4959.3ms | 5105.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4921.3ms | 5068.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4711.6ms | 4857.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4710.7ms | 4856.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4808.4ms | 4837.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4715.3ms | 4747.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4678.1ms | 4710.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4466.3ms | 4502.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4465.3ms | 4501.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9766.0ms | 0.000 | 2425.1MB | 962.5MB | -1462.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9534.0ms | 0.105 | 833.7MB | 1014.2MB | 180.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10231.0ms | 0.195 | 807.1MB | 1024.0MB | 217.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3324.8ms | 3340.4ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 783.3ms | 804.5ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 64.9ms |

## Observations

No data.

