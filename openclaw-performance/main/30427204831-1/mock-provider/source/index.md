# OpenClaw Source Performance

Generated: 2026-07-29T06:13:56.893Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5941.4ms | 5954.2ms | 5941.2ms | 2878.8ms | 5520.4ms | 202.7ms | 1033.9MB | 1.346 |
| skipChannels | gateway, skip channels | 3056.7ms | 3170.1ms | 3055.9ms | 2991.7ms | 3007.0ms | 210.0ms | 942.7MB | 1.577 |
| oneInternalHook | gateway, one configured internal hook | 4584.0ms | 4590.1ms | 4583.6ms | 4513.4ms | 4520.6ms | 221.7ms | 977.1MB | 1.325 |
| allInternalHooks | gateway, all internal hooks | 4670.6ms | 4739.4ms | 4670.3ms | 4605.4ms | 4615.5ms | 231.8ms | 934.7MB | 1.285 |
| fiftyPlugins | gateway, 50 manifest plugins | 7949.1ms | 8239.5ms | 7949.0ms | 2919.1ms | 2964.2ms | 217.8ms | 1089.1MB | 1.283 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7947.6ms | 9053.3ms | 7947.5ms | 2920.0ms | 2974.0ms | 215.1ms | 1095.5MB | 1.272 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 966.1MB | 1033.9MB | +67.8MB (+7.0%) | +21.0MB (+3.2%) | stable |
| gateway boot | skipChannels | 912.8MB | 942.7MB | +29.9MB (+3.3%) | +194.6MB (+52.0%) | stable |
| gateway boot | oneInternalHook | 965.5MB | 977.1MB | +11.6MB (+1.2%) | -8.7MB (-1.7%) | stable |
| gateway boot | allInternalHooks | 979.9MB | 934.7MB | -45.1MB (-4.6%) | +4.2MB (+0.8%) | stable |
| gateway boot | fiftyPlugins | 1109.6MB | 1089.1MB | -20.5MB (-1.8%) | -441.0MB (-56.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1173.3MB | 1095.5MB | -77.8MB (-6.6%) | -85.6MB (-11.9%) | stable |
| cli | gatewayHealthJson | 61.9MB | 187.0MB | +125.1MB (+201.9%) | n/a | watch |
| cli | configGetGatewayPort | 62.0MB | 187.0MB | +124.9MB (+201.4%) | n/a | watch |
| mock hello | gateway RSS delta avg | -495.3MB | -467.7MB | +27.6MB (-5.6%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 573.0MB | 526.6MB | ok |
| opencode | 572.9MB | 526.4MB | ok |
| anthropic | 541.3MB | 494.8MB | ok |
| codex | 539.5MB | 493.1MB | ok |
| openai | 536.6MB | 490.1MB | ok |
| teams-meetings | 526.7MB | 480.3MB | ok |
| xai | 525.5MB | 479.1MB | ok |
| acpx | 521.0MB | 474.5MB | ok |
| memory-lancedb | 516.1MB | 469.6MB | ok |
| google-meet | 515.9MB | 469.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3882.0ms | 3930.9ms |
| default | post-ready.agent-runtime-plugins.total | 3854.8ms | 3905.2ms |
| default | post-attach.update-check.total | 3851.7ms | 3902.2ms |
| default | post-attach.update-sentinel.total | 3595.9ms | 3644.8ms |
| default | sidecars.restart-sentinel.total | 3594.7ms | 3643.8ms |
| skipChannels | sidecars.internal-hooks.total | 1067.5ms | 1078.6ms |
| skipChannels | post-attach.update-check.total | 973.2ms | 994.2ms |
| skipChannels | ready.total | 957.8ms | 966.3ms |
| skipChannels | runtime.post-attach.total | 956.2ms | 964.8ms |
| skipChannels | post-attach.log.total | 955.3ms | 964.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3308.1ms | 3360.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2728.9ms | 2758.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2711.0ms | 2736.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2710.1ms | 2734.9ms |
| oneInternalHook | sidecars.internal-hooks.total | 1021.1ms | 1065.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3471.0ms | 3493.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2857.9ms | 2862.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2828.7ms | 2838.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2827.7ms | 2837.6ms |
| allInternalHooks | sidecars.internal-hooks.total | 1031.4ms | 1102.8ms |
| fiftyPlugins | sidecars.session-locks.total | 5811.6ms | 6053.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5808.3ms | 5895.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5654.3ms | 5735.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5653.3ms | 5734.8ms |
| fiftyPlugins | sidecars.ready.total | 5644.4ms | 5721.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5707.4ms | 6266.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5612.7ms | 6173.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5544.4ms | 6113.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5388.9ms | 5961.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5387.9ms | 5960.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10973.0ms | 0.000 | 2726.0MB | 1078.4MB | -1647.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10511.0ms | 0.095 | 1012.0MB | 1138.0MB | 126.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10276.0ms | 0.097 | 1011.3MB | 1129.8MB | 118.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 629.1ms | 632.4ms | 187.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 843.9ms | 889.7ms | 187.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 135.2ms |

## Observations

No data.

