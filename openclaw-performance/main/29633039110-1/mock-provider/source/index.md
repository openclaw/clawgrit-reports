# OpenClaw Source Performance

Generated: 2026-07-18T05:57:36.025Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3027.4ms | 3080.2ms | 3019.7ms | 2841.8ms | 2906.8ms | 41.9ms | 777.8MB | 1.327 |
| skipChannels | gateway, skip channels | 2926.4ms | 2943.5ms | 2925.9ms | 2853.2ms | 2896.3ms | 41.9ms | 760.7MB | 1.381 |
| oneInternalHook | gateway, one configured internal hook | 4261.7ms | 4323.9ms | 4261.5ms | 4194.4ms | 4231.2ms | 44.5ms | 941.8MB | 1.421 |
| allInternalHooks | gateway, all internal hooks | 4322.6ms | 4358.8ms | 4322.4ms | 4252.1ms | 4294.5ms | 42.9ms | 946.9MB | 1.391 |
| fiftyPlugins | gateway, 50 manifest plugins | 4612.3ms | 4680.3ms | 4612.3ms | 4252.1ms | 4326.8ms | 39.4ms | 927.9MB | 1.302 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4388.6ms | 4439.0ms | 4388.3ms | 3951.1ms | 4035.9ms | 43.3ms | 923.1MB | 1.368 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 841.2MB | 777.8MB | -63.4MB (-7.5%) | +8.5MB (+1.9%) | stable |
| gateway boot | skipChannels | 789.4MB | 760.7MB | -28.7MB (-3.6%) | +4.8MB (+1.0%) | stable |
| gateway boot | oneInternalHook | 941.4MB | 941.8MB | +0.4MB (+0.0%) | +24.3MB (+3.6%) | stable |
| gateway boot | allInternalHooks | 923.6MB | 946.9MB | +23.4MB (+2.5%) | +43.2MB (+6.6%) | stable |
| gateway boot | fiftyPlugins | 894.4MB | 927.9MB | +33.5MB (+3.7%) | +39.9MB (+8.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 895.8MB | 923.1MB | +27.3MB (+3.0%) | +1.8MB (+0.4%) | stable |
| cli | gatewayHealthJson | 62.7MB | 66.0MB | +3.3MB (+5.3%) | n/a | stable |
| cli | configGetGatewayPort | 65.8MB | 66.2MB | +0.3MB (+0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | -450.2MB | -348.7MB | +101.4MB (-22.5%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| anthropic | 522.1MB | 475.6MB | ok |
| active-memory | 516.8MB | 470.4MB | ok |
| memory-lancedb | 513.8MB | 467.3MB | ok |
| llm-task | 513.3MB | 466.8MB | ok |
| xai | 509.5MB | 463.0MB | ok |
| codex | 508.7MB | 462.2MB | ok |
| migrate-hermes | 503.9MB | 457.5MB | ok |
| workboard | 502.0MB | 455.5MB | ok |
| google | 426.6MB | 380.1MB | ok |
| openai | 419.0MB | 372.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 893.6ms | 904.5ms |
| default | post-ready.agent-runtime-plugins.total | 883.7ms | 894.8ms |
| default | post-attach.update-check.total | 835.1ms | 845.7ms |
| default | post-attach.update-sentinel.total | 827.6ms | 838.5ms |
| default | sidecars.restart-sentinel.total | 826.5ms | 837.6ms |
| skipChannels | sidecars.session-locks.total | 896.2ms | 897.1ms |
| skipChannels | post-attach.update-sentinel.total | 890.7ms | 890.8ms |
| skipChannels | sidecars.restart-sentinel.total | 889.9ms | 890.1ms |
| skipChannels | sidecars.ready.total | 888.3ms | 888.3ms |
| skipChannels | sidecars.total.total | 882.6ms | 883.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3290.9ms | 3338.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2658.7ms | 2685.8ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2630.9ms | 2656.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2630.1ms | 2655.5ms |
| oneInternalHook | memory.ready.rssMb | 929.3ms | 935.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3342.7ms | 3353.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2696.2ms | 2721.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2664.0ms | 2688.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2663.1ms | 2688.0ms |
| allInternalHooks | memory.ready.rssMb | 929.2ms | 937.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3178.4ms | 3203.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2535.2ms | 2578.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2499.8ms | 2546.5ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2498.8ms | 2545.5ms |
| fiftyPlugins | sidecars.session-locks.total | 1085.5ms | 1115.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3121.1ms | 3163.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2481.1ms | 2535.0ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2451.6ms | 2500.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2450.7ms | 2499.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 930.0ms | 942.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9558.0ms | 0.000 | 2460.4MB | 1112.4MB | -1348.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9219.0ms | 0.108 | 926.3MB | 1072.3MB | 146.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9179.0ms | 0.218 | 925.3MB | 1081.1MB | 155.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3426.5ms | 4968.8ms | 66.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 748.5ms | 751.9ms | 66.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.1ms | 55.3ms |

## Observations

No data.

