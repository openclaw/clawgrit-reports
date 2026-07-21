# OpenClaw Source Performance

Generated: 2026-07-21T06:13:48.829Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6440.3ms | 6536.8ms | 6293.1ms | 2664.7ms | 6398.8ms | 41.1ms | 958.4MB | 1.256 |
| skipChannels | gateway, skip channels | 2885.2ms | 2920.1ms | 2884.8ms | 2778.7ms | 2822.6ms | 42.4ms | 878.6MB | 1.400 |
| oneInternalHook | gateway, one configured internal hook | 4086.4ms | 4176.6ms | 4086.3ms | 3999.7ms | 4046.7ms | 42.7ms | 928.6MB | 1.232 |
| allInternalHooks | gateway, all internal hooks | 4176.1ms | 4246.0ms | 4175.6ms | 3986.3ms | 4046.1ms | 43.6ms | 928.7MB | 1.217 |
| fiftyPlugins | gateway, 50 manifest plugins | 6430.7ms | 6471.6ms | 6430.7ms | 4195.9ms | 4280.1ms | 44.6ms | 1097.0MB | 1.255 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5959.2ms | 6086.1ms | 5959.1ms | 3767.2ms | 3848.8ms | 45.2ms | 1111.0MB | 1.342 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 918.6MB | 958.4MB | +39.9MB (+4.3%) | +6.3MB (+1.2%) | stable |
| gateway boot | skipChannels | 696.8MB | 878.6MB | +181.8MB (+26.1%) | -130.8MB (-35.9%) | watch |
| gateway boot | oneInternalHook | 861.4MB | 928.6MB | +67.2MB (+7.8%) | +176.8MB (+37.4%) | stable |
| gateway boot | allInternalHooks | 856.4MB | 928.7MB | +72.3MB (+8.4%) | -175.0MB (-37.9%) | stable |
| gateway boot | fiftyPlugins | 886.4MB | 1097.0MB | +210.6MB (+23.8%) | +208.2MB (+53.1%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 859.5MB | 1111.0MB | +251.6MB (+29.3%) | +194.5MB (+47.2%) | watch |
| cli | gatewayHealthJson | 59.4MB | 60.3MB | +0.9MB (+1.5%) | n/a | stable |
| cli | configGetGatewayPort | 59.3MB | 60.1MB | +0.8MB (+1.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | -368.4MB | -463.8MB | -95.4MB (+25.9%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 527.2MB | 480.7MB | ok |
| workboard | 508.9MB | 462.4MB | ok |
| zoom-meetings | 508.6MB | 462.2MB | ok |
| teams-meetings | 507.9MB | 461.4MB | ok |
| codex | 507.5MB | 461.1MB | ok |
| memory-lancedb | 506.0MB | 459.5MB | ok |
| anthropic | 503.3MB | 456.8MB | ok |
| voice-call | 502.9MB | 456.5MB | ok |
| migrate-hermes | 501.3MB | 454.8MB | ok |
| active-memory | 500.5MB | 454.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4530.0ms | 4548.6ms |
| default | post-ready.agent-runtime-plugins.total | 4520.9ms | 4539.9ms |
| default | post-attach.update-check.total | 4518.2ms | 4537.4ms |
| default | post-attach.update-sentinel.total | 4511.0ms | 4530.0ms |
| default | sidecars.restart-sentinel.total | 4509.8ms | 4528.9ms |
| skipChannels | sidecars.internal-hooks.total | 884.6ms | 892.9ms |
| skipChannels | memory.ready.rssMb | 856.8ms | 857.6ms |
| skipChannels | post-attach.update-check.total | 826.5ms | 862.5ms |
| skipChannels | ready.total | 810.1ms | 843.8ms |
| skipChannels | runtime.post-attach.total | 808.6ms | 842.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3092.8ms | 3165.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2511.2ms | 2573.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2486.6ms | 2548.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2485.4ms | 2547.5ms |
| oneInternalHook | memory.ready.rssMb | 904.2ms | 907.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3087.1ms | 3133.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2521.6ms | 2530.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2496.8ms | 2507.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2496.0ms | 2506.5ms |
| allInternalHooks | memory.ready.rssMb | 912.1ms | 918.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3085.4ms | 3116.5ms |
| fiftyPlugins | sidecars.session-locks.total | 3028.6ms | 3039.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3024.7ms | 3035.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2848.3ms | 2848.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2847.4ms | 2847.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2970.1ms | 2998.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2727.9ms | 2770.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2689.0ms | 2774.0ms |
| fiftyStartupLazyPlugins | sidecars.plugin-services.total | 2528.4ms | 2560.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2518.6ms | 2586.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9586.0ms | 0.000 | 2418.2MB | 935.4MB | -1482.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8955.0ms | 0.223 | 856.9MB | 901.3MB | 44.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9293.0ms | 0.215 | 904.7MB | 951.6MB | 46.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3238.3ms | 3239.3ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 728.5ms | 742.6ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 63.3ms |

## Observations

No data.

