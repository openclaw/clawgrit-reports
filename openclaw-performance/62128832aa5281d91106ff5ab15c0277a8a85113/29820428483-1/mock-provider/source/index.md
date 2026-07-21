# OpenClaw Source Performance

Generated: 2026-07-21T10:05:27.144Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7783.4ms | 7830.4ms | 7460.8ms | 3125.9ms | 7675.5ms | 46.5ms | 909.6MB | 1.285 |
| skipChannels | gateway, skip channels | 7299.4ms | 7959.6ms | 7299.3ms | 3015.4ms | 3088.2ms | 43.7ms | 913.8MB | 1.287 |
| oneInternalHook | gateway, one configured internal hook | 8204.7ms | 8539.8ms | 4999.1ms | 4733.6ms | 4801.8ms | 47.1ms | 935.9MB | 1.400 |
| allInternalHooks | gateway, all internal hooks | 7969.7ms | 7977.7ms | 7745.1ms | 4495.9ms | 4548.6ms | 46.3ms | 960.8MB | 1.275 |
| fiftyPlugins | gateway, 50 manifest plugins | 6865.4ms | 7088.3ms | 6865.4ms | 4500.0ms | 4584.5ms | 46.4ms | 1133.6MB | 1.320 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7627.2ms | 7955.0ms | 7627.2ms | 4618.9ms | 4712.3ms | 47.1ms | 1122.1MB | 1.341 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 514.9MB | 468.5MB | ok |
| workboard | 505.7MB | 459.2MB | ok |
| active-memory | 504.3MB | 457.8MB | ok |
| llm-task | 503.0MB | 456.6MB | ok |
| memory-lancedb | 503.0MB | 456.5MB | ok |
| zoom-meetings | 500.4MB | 453.9MB | ok |
| xai | 465.8MB | 419.4MB | ok |
| teams-meetings | 456.0MB | 409.5MB | ok |
| google-meet | 455.5MB | 409.1MB | ok |
| anthropic | 455.3MB | 408.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5417.4ms | 5563.4ms |
| default | post-ready.agent-runtime-plugins.total | 5405.8ms | 5553.3ms |
| default | post-attach.update-check.total | 5401.6ms | 5549.2ms |
| default | post-attach.update-sentinel.total | 5391.3ms | 5538.8ms |
| default | sidecars.restart-sentinel.total | 5389.9ms | 5537.3ms |
| skipChannels | sidecars.session-locks.total | 5336.9ms | 5592.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5334.7ms | 5589.9ms |
| skipChannels | post-attach.update-sentinel.total | 5329.2ms | 5583.5ms |
| skipChannels | sidecars.restart-sentinel.total | 5328.0ms | 5582.1ms |
| skipChannels | sidecars.ready.total | 5307.2ms | 5559.5ms |
| oneInternalHook | sidecars.model-runtime.total | 4621.6ms | 4878.0ms |
| oneInternalHook | sidecars.ready.total | 4392.0ms | 4392.0ms |
| oneInternalHook | sidecars.total.total | 4382.4ms | 4382.4ms |
| oneInternalHook | sidecars.memory.total | 4381.6ms | 4381.6ms |
| oneInternalHook | sidecars.plugin-services.total | 4380.9ms | 4380.9ms |
| allInternalHooks | sidecars.ready.total | 4258.3ms | 4347.7ms |
| allInternalHooks | sidecars.total.total | 4250.9ms | 4340.2ms |
| allInternalHooks | sidecars.memory.total | 4250.2ms | 4339.5ms |
| allInternalHooks | sidecars.plugin-services.total | 4249.5ms | 4338.9ms |
| allInternalHooks | sidecars.plugin-services.phone-control.phone-control-expiry.total | 4248.4ms | 4337.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3290.8ms | 3423.7ms |
| fiftyPlugins | sidecars.session-locks.total | 3241.5ms | 3308.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3237.6ms | 3304.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3061.0ms | 3095.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3060.0ms | 3094.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3582.2ms | 4037.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3499.5ms | 3679.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3495.7ms | 3672.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3320.0ms | 3445.0ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3319.1ms | 3443.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10219.0ms | 0.000 | 2334.7MB | 1005.2MB | -1329.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9348.0ms | 0.107 | 824.5MB | 871.4MB | 46.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9786.0ms | 0.102 | 887.7MB | 931.8MB | 44.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3448.7ms | 3463.5ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 796.9ms | 815.9ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 58.4ms |

## Observations

No data.

