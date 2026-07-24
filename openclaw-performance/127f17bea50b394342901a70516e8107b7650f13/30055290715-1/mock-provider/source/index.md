# OpenClaw Source Performance

Generated: 2026-07-24T00:14:00.930Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5809.8ms | 5976.8ms | 5656.1ms | 2964.8ms | 5728.8ms | 40.2ms | 928.9MB | 1.339 |
| skipChannels | gateway, skip channels | 3039.6ms | 3116.5ms | 3039.2ms | 2965.2ms | 3005.6ms | 39.4ms | 775.0MB | 1.319 |
| oneInternalHook | gateway, one configured internal hook | 6612.5ms | 6670.0ms | 6612.4ms | 4284.2ms | 4341.9ms | 42.0ms | 980.1MB | 1.213 |
| allInternalHooks | gateway, all internal hooks | 4273.8ms | 4382.7ms | 4273.4ms | 4195.1ms | 4240.7ms | 42.7ms | 955.6MB | 1.404 |
| fiftyPlugins | gateway, 50 manifest plugins | 8067.8ms | 8236.1ms | 8067.8ms | 4140.5ms | 4216.1ms | 41.5ms | 1172.9MB | 1.253 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7857.5ms | 7947.1ms | 7857.4ms | 3780.0ms | 3873.7ms | 42.3ms | 1146.3MB | 1.273 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 512.6MB | 466.2MB | ok |
| llm-task | 511.6MB | 465.2MB | ok |
| workboard | 511.3MB | 464.8MB | ok |
| voice-call | 510.4MB | 463.9MB | ok |
| active-memory | 508.1MB | 461.6MB | ok |
| zoom-meetings | 506.8MB | 460.4MB | ok |
| anthropic | 506.5MB | 460.0MB | ok |
| google-meet | 505.1MB | 458.7MB | ok |
| memory-lancedb | 503.3MB | 456.8MB | ok |
| migrate-hermes | 503.0MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3624.3ms | 3792.5ms |
| default | post-ready.agent-runtime-plugins.total | 3612.6ms | 3781.0ms |
| default | post-attach.update-check.total | 3610.2ms | 3778.5ms |
| default | post-attach.update-sentinel.total | 3602.0ms | 3769.6ms |
| default | sidecars.restart-sentinel.total | 3600.9ms | 3768.4ms |
| skipChannels | sidecars.internal-hooks.total | 930.7ms | 957.8ms |
| skipChannels | post-attach.update-check.total | 862.9ms | 888.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 858.7ms | 860.1ms |
| skipChannels | ready.total | 846.8ms | 871.7ms |
| skipChannels | runtime.post-attach.total | 845.5ms | 870.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3298.7ms | 3312.7ms |
| oneInternalHook | sidecars.session-locks.total | 3041.3ms | 3064.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3039.9ms | 3062.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3035.7ms | 3058.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3034.7ms | 3056.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3234.8ms | 3282.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2586.6ms | 2617.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2563.0ms | 2591.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2562.1ms | 2590.5ms |
| allInternalHooks | memory.ready.rssMb | 916.4ms | 940.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4727.0ms | 4851.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4633.6ms | 4756.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4597.6ms | 4720.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4396.8ms | 4514.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4395.9ms | 4513.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4563.0ms | 4602.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4476.8ms | 4507.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4439.3ms | 4469.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4247.3ms | 4264.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4246.4ms | 4263.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10197.0ms | 0.000 | 2476.6MB | 964.4MB | -1512.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9660.0ms | 0.207 | 814.9MB | 1013.0MB | 198.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9856.0ms | 0.203 | 878.6MB | 947.7MB | 69.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3339.0ms | 3381.9ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 755.5ms | 758.3ms | 60.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 62.2ms |

## Observations

No data.

