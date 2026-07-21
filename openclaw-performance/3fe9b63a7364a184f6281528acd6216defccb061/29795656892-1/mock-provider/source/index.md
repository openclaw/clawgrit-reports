# OpenClaw Source Performance

Generated: 2026-07-21T02:27:14.374Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5991.4ms | 6022.4ms | 2364.3ms | 2248.8ms | 5920.0ms | 39.8ms | 917.5MB | 1.176 |
| skipChannels | gateway, skip channels | 2312.5ms | 2401.9ms | 2312.5ms | 2238.3ms | 2278.4ms | 37.5ms | 774.4MB | 1.298 |
| oneInternalHook | gateway, one configured internal hook | 3638.5ms | 3981.0ms | 3638.2ms | 3562.4ms | 3606.9ms | 36.4ms | 864.8MB | 1.256 |
| allInternalHooks | gateway, all internal hooks | 3746.0ms | 3826.5ms | 3745.7ms | 3671.5ms | 3714.4ms | 43.7ms | 862.2MB | 1.335 |
| fiftyPlugins | gateway, 50 manifest plugins | 5656.0ms | 5661.4ms | 5656.0ms | 3640.4ms | 3721.2ms | 38.2ms | 897.9MB | 1.241 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3835.3ms | 3872.8ms | 3834.6ms | 3386.7ms | 3470.7ms | 41.5ms | 897.4MB | 1.305 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 501.9MB | 455.4MB | ok |
| workboard | 491.1MB | 444.7MB | ok |
| codex | 467.7MB | 421.3MB | ok |
| google-meet | 464.1MB | 417.6MB | ok |
| teams-meetings | 461.1MB | 414.6MB | ok |
| xai | 457.2MB | 410.8MB | ok |
| memory-lancedb | 447.2MB | 400.7MB | ok |
| anthropic | 438.7MB | 392.3MB | ok |
| active-memory | 429.6MB | 383.2MB | ok |
| llm-task | 429.6MB | 383.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4403.5ms | 4434.1ms |
| default | post-ready.agent-runtime-plugins.total | 4393.8ms | 4419.9ms |
| default | post-attach.update-check.total | 4391.1ms | 4417.3ms |
| default | post-attach.update-sentinel.total | 4383.8ms | 4410.1ms |
| default | sidecars.restart-sentinel.total | 4382.6ms | 4408.9ms |
| skipChannels | sidecars.internal-hooks.total | 741.1ms | 743.2ms |
| skipChannels | post-attach.update-check.total | 688.3ms | 696.1ms |
| skipChannels | ready.total | 674.1ms | 682.5ms |
| skipChannels | runtime.post-attach.total | 672.7ms | 678.7ms |
| skipChannels | post-attach.log.total | 671.7ms | 677.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2793.7ms | 3079.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2270.8ms | 2437.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2250.5ms | 2413.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2249.6ms | 2412.1ms |
| oneInternalHook | memory.ready.rssMb | 720.9ms | 724.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2880.5ms | 2953.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2320.7ms | 2321.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2300.0ms | 2300.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2299.2ms | 2299.6ms |
| allInternalHooks | memory.ready.rssMb | 724.4ms | 724.6ms |
| fiftyPlugins | sidecars.session-locks.total | 2738.4ms | 2761.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2734.6ms | 2757.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2665.0ms | 2678.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2568.6ms | 2590.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2567.7ms | 2589.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2694.4ms | 2732.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2382.6ms | 2387.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2377.6ms | 2382.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2376.5ms | 2381.1ms |
| fiftyStartupLazyPlugins | sidecars.ready.total | 2360.2ms | 2365.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8789.0ms | 0.000 | 2315.9MB | 910.6MB | -1405.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8435.0ms | 0.237 | 770.5MB | 877.8MB | 107.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8976.0ms | 0.223 | 769.2MB | 867.4MB | 98.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2856.3ms | 2873.5ms | 59.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 637.0ms | 653.3ms | 59.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 63.6ms |

## Observations

No data.

