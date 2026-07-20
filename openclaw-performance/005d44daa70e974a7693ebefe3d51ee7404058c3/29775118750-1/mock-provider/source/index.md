# OpenClaw Source Performance

Generated: 2026-07-20T20:18:08.925Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6869.7ms | 7690.4ms | 6869.7ms | 2473.1ms | 6734.8ms | 40.8ms | 908.0MB | 1.239 |
| skipChannels | gateway, skip channels | 2371.8ms | 2386.5ms | 2371.5ms | 2294.8ms | 2339.0ms | 41.2ms | 698.0MB | 1.331 |
| oneInternalHook | gateway, one configured internal hook | 4187.6ms | 8787.5ms | 4187.5ms | 4099.0ms | 4149.6ms | 39.7ms | 1004.3MB | 1.252 |
| allInternalHooks | gateway, all internal hooks | 4007.7ms | 4267.4ms | 4007.5ms | 3924.2ms | 3974.6ms | 47.7ms | 835.4MB | 1.324 |
| fiftyPlugins | gateway, 50 manifest plugins | 6974.5ms | 7604.4ms | 6974.4ms | 4381.9ms | 4479.1ms | 49.7ms | 899.8MB | 1.290 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5931.6ms | 6910.4ms | 4154.2ms | 3653.3ms | 3744.2ms | 46.7ms | 924.5MB | 1.302 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 487.4MB | 441.0MB | ok |
| codex | 469.1MB | 422.6MB | ok |
| google-meet | 459.6MB | 413.1MB | ok |
| xai | 457.3MB | 410.8MB | ok |
| workboard | 457.0MB | 410.5MB | ok |
| teams-meetings | 447.9MB | 401.4MB | ok |
| zoom-meetings | 447.7MB | 401.2MB | ok |
| anthropic | 436.5MB | 390.1MB | ok |
| active-memory | 428.2MB | 381.8MB | ok |
| llm-task | 427.8MB | 381.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5101.7ms | 5557.7ms |
| default | post-ready.agent-runtime-plugins.total | 5090.6ms | 5534.2ms |
| default | post-attach.update-check.total | 5086.7ms | 5530.6ms |
| default | post-attach.update-sentinel.total | 5072.5ms | 5521.5ms |
| default | sidecars.restart-sentinel.total | 5070.7ms | 5520.0ms |
| skipChannels | sidecars.internal-hooks.total | 750.5ms | 804.6ms |
| skipChannels | post-attach.update-check.total | 690.6ms | 770.5ms |
| skipChannels | ready.total | 676.2ms | 755.3ms |
| skipChannels | runtime.post-attach.total | 674.9ms | 753.5ms |
| skipChannels | post-attach.log.total | 673.9ms | 752.1ms |
| oneInternalHook | sidecars.session-locks.total | 5155.5ms | 5155.5ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 5152.4ms | 5152.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 5147.0ms | 5147.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 5145.7ms | 5145.7ms |
| oneInternalHook | sidecars.ready.total | 5125.9ms | 5125.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3068.0ms | 3138.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2423.4ms | 2515.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2398.7ms | 2491.2ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2397.8ms | 2490.1ms |
| allInternalHooks | sidecars.internal-hooks.total | 781.6ms | 798.8ms |
| fiftyPlugins | sidecars.session-locks.total | 3541.4ms | 3913.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3537.6ms | 3909.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3366.4ms | 3722.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3365.4ms | 3721.5ms |
| fiftyPlugins | sidecars.ready.total | 3349.3ms | 3705.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2830.5ms | 3691.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2826.6ms | 3687.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2826.4ms | 2917.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2646.1ms | 3453.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2645.0ms | 3452.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11039.0ms | 0.000 | 2333.0MB | 872.1MB | -1460.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11706.0ms | 0.256 | 768.5MB | 851.1MB | 82.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10944.0ms | 0.274 | 776.7MB | 867.8MB | 91.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3541.9ms | 3787.5ms | 59.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 777.0ms | 933.8ms | 59.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 63.0ms |

## Observations

No data.

