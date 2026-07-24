# OpenClaw Source Performance

Generated: 2026-07-24T01:51:55.319Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6180.4ms | 6239.7ms | 6180.3ms | 3072.2ms | 6074.7ms | 44.5ms | 923.2MB | 1.303 |
| skipChannels | gateway, skip channels | 3098.5ms | 3146.3ms | 3098.1ms | 3022.5ms | 3065.1ms | 43.1ms | 775.7MB | 1.335 |
| oneInternalHook | gateway, one configured internal hook | 4298.8ms | 4322.6ms | 4298.6ms | 4220.0ms | 4265.6ms | 39.7ms | 949.7MB | 1.388 |
| allInternalHooks | gateway, all internal hooks | 4408.9ms | 6793.0ms | 4408.7ms | 4325.3ms | 4376.4ms | 42.6ms | 996.1MB | 1.361 |
| fiftyPlugins | gateway, 50 manifest plugins | 8026.3ms | 8057.3ms | 8026.3ms | 4069.9ms | 4149.5ms | 41.4ms | 1137.4MB | 1.251 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8241.6ms | 8287.4ms | 8241.6ms | 3980.8ms | 4073.0ms | 42.1ms | 1137.4MB | 1.217 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 526.2MB | 479.6MB | ok |
| codex | 517.5MB | 470.9MB | ok |
| teams-meetings | 511.4MB | 464.8MB | ok |
| memory-lancedb | 508.2MB | 461.6MB | ok |
| migrate-hermes | 507.2MB | 460.6MB | ok |
| workboard | 506.1MB | 459.5MB | ok |
| google-meet | 505.2MB | 458.6MB | ok |
| voice-call | 503.1MB | 456.5MB | ok |
| anthropic | 502.9MB | 456.3MB | ok |
| llm-task | 502.0MB | 455.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3904.1ms | 3967.2ms |
| default | post-ready.agent-runtime-plugins.total | 3891.8ms | 3953.9ms |
| default | post-attach.update-check.total | 3888.9ms | 3950.8ms |
| default | post-attach.update-sentinel.total | 3879.1ms | 3940.6ms |
| default | sidecars.restart-sentinel.total | 3877.9ms | 3939.3ms |
| skipChannels | sidecars.internal-hooks.total | 930.6ms | 986.9ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 877.2ms | 878.2ms |
| skipChannels | post-attach.update-check.total | 859.5ms | 918.2ms |
| skipChannels | ready.total | 843.0ms | 901.4ms |
| skipChannels | runtime.post-attach.total | 841.6ms | 900.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3240.3ms | 3301.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2575.6ms | 2655.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2550.6ms | 2625.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2549.8ms | 2624.9ms |
| oneInternalHook | memory.ready.rssMb | 819.0ms | 931.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3341.8ms | 3391.8ms |
| allInternalHooks | sidecars.session-locks.total | 3056.2ms | 3056.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3054.6ms | 3054.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3050.4ms | 3050.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3049.5ms | 3049.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4699.6ms | 4800.7ms |
| fiftyPlugins | post-ready.maintenance.total | 4610.4ms | 4708.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4575.8ms | 4673.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4380.6ms | 4471.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4379.8ms | 4470.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4808.2ms | 4896.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4714.1ms | 4801.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4674.2ms | 4763.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4463.9ms | 4535.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4462.7ms | 4534.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10320.0ms | 0.000 | 2418.2MB | 963.0MB | -1455.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10127.0ms | 0.099 | 835.7MB | 1012.4MB | 176.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9866.0ms | 0.203 | 875.6MB | 939.1MB | 63.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3609.9ms | 3618.1ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 817.2ms | 840.4ms | 60.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 77.2ms |

## Observations

No data.

