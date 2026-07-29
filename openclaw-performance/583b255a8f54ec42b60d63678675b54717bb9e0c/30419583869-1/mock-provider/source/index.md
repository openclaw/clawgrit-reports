# OpenClaw Source Performance

Generated: 2026-07-29T03:32:42.167Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6070.8ms | 6493.6ms | 6070.7ms | 2973.2ms | 5703.6ms | 221.9ms | 1042.1MB | 1.352 |
| skipChannels | gateway, skip channels | 3109.8ms | 3251.0ms | 3109.0ms | 3051.1ms | 3060.1ms | 212.3ms | 974.2MB | 1.351 |
| oneInternalHook | gateway, one configured internal hook | 4389.8ms | 4589.2ms | 4389.4ms | 4326.6ms | 4343.5ms | 219.3ms | 968.4MB | 1.376 |
| allInternalHooks | gateway, all internal hooks | 4548.0ms | 4549.1ms | 4547.7ms | 4482.5ms | 4491.5ms | 224.4ms | 965.9MB | 1.352 |
| fiftyPlugins | gateway, 50 manifest plugins | 8476.2ms | 8528.0ms | 8476.2ms | 4353.5ms | 4406.2ms | 228.7ms | 1181.7MB | 1.298 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8554.3ms | 8663.0ms | 8554.2ms | 4271.0ms | 4327.8ms | 232.8ms | 1225.7MB | 1.302 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 538.1MB | 491.6MB | ok |
| opencode | 537.1MB | 490.6MB | ok |
| openai | 529.6MB | 483.1MB | ok |
| voice-call | 526.9MB | 480.4MB | ok |
| memory-lancedb | 520.5MB | 474.0MB | ok |
| acpx | 514.9MB | 468.5MB | ok |
| anthropic | 513.7MB | 467.2MB | ok |
| active-memory | 510.6MB | 464.1MB | ok |
| teams-meetings | 510.5MB | 464.1MB | ok |
| zoom-meetings | 510.3MB | 463.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3971.3ms | 4262.3ms |
| default | post-ready.agent-runtime-plugins.total | 3943.5ms | 4230.2ms |
| default | post-attach.update-check.total | 3940.3ms | 4226.2ms |
| default | post-attach.update-sentinel.total | 3673.4ms | 3898.4ms |
| default | sidecars.restart-sentinel.total | 3672.5ms | 3897.2ms |
| skipChannels | sidecars.internal-hooks.total | 1124.7ms | 1205.0ms |
| skipChannels | post-attach.update-check.total | 1022.2ms | 1107.7ms |
| skipChannels | ready.total | 1007.1ms | 1088.3ms |
| skipChannels | runtime.post-attach.total | 1005.6ms | 1086.8ms |
| skipChannels | post-attach.log.total | 1004.6ms | 1086.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3182.3ms | 3306.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2615.9ms | 2736.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2592.0ms | 2717.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2591.1ms | 2716.0ms |
| oneInternalHook | sidecars.internal-hooks.total | 980.9ms | 1032.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3325.2ms | 3333.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2729.8ms | 2744.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2711.6ms | 2716.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2710.6ms | 2715.2ms |
| allInternalHooks | sidecars.internal-hooks.total | 986.0ms | 993.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4925.5ms | 4948.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4856.6ms | 4879.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4795.5ms | 4818.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4651.6ms | 4673.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4650.7ms | 4672.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4986.6ms | 5032.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4916.6ms | 4955.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4855.1ms | 4886.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4707.9ms | 4710.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4706.6ms | 4709.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11284.0ms | 0.000 | 2702.3MB | 1222.8MB | -1479.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11052.0ms | 0.090 | 1083.4MB | 1206.0MB | 122.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10882.0ms | 0.184 | 1009.6MB | 1194.9MB | 185.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 668.8ms | 703.1ms | 187.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 894.9ms | 896.5ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 148.5ms |

## Observations

No data.

