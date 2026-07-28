# OpenClaw Source Performance

Generated: 2026-07-28T12:35:12.632Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6233.0ms | 6251.9ms | 6232.9ms | 3015.4ms | 5841.3ms | 219.6ms | 1069.1MB | 1.291 |
| skipChannels | gateway, skip channels | 5950.1ms | 6143.2ms | 5950.1ms | 2932.4ms | 2975.6ms | 218.9ms | 1099.3MB | 1.345 |
| oneInternalHook | gateway, one configured internal hook | 6946.0ms | 6955.2ms | 6945.9ms | 4501.3ms | 4542.3ms | 222.8ms | 1142.3MB | 1.323 |
| allInternalHooks | gateway, all internal hooks | 4360.5ms | 4452.2ms | 4360.0ms | 4273.9ms | 4317.6ms | 214.1ms | 1061.4MB | 1.388 |
| fiftyPlugins | gateway, 50 manifest plugins | 8075.6ms | 8089.3ms | 8075.4ms | 4079.5ms | 4156.0ms | 213.7ms | 1242.2MB | 1.262 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7906.8ms | 7931.4ms | 7906.7ms | 3893.0ms | 3979.4ms | 203.4ms | 1213.1MB | 1.268 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 582.7MB | 536.1MB | ok |
| codex | 547.9MB | 501.3MB | ok |
| voice-call | 527.9MB | 481.4MB | ok |
| opencode | 526.9MB | 480.4MB | ok |
| anthropic | 518.6MB | 472.0MB | ok |
| zoom-meetings | 509.3MB | 462.7MB | ok |
| google-meet | 509.1MB | 462.5MB | ok |
| teams-meetings | 508.6MB | 462.0MB | ok |
| acpx | 508.6MB | 462.0MB | ok |
| active-memory | 507.4MB | 460.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4090.3ms | 4115.7ms |
| default | post-ready.agent-runtime-plugins.total | 4074.6ms | 4089.3ms |
| default | post-attach.update-check.total | 4071.2ms | 4085.9ms |
| default | post-attach.update-sentinel.total | 3779.7ms | 3802.6ms |
| default | sidecars.restart-sentinel.total | 3778.6ms | 3801.5ms |
| skipChannels | sidecars.session-locks.total | 4036.9ms | 4083.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4032.6ms | 4077.5ms |
| skipChannels | post-attach.update-sentinel.total | 3766.8ms | 3805.5ms |
| skipChannels | sidecars.restart-sentinel.total | 3765.7ms | 3804.3ms |
| skipChannels | sidecars.ready.total | 3753.8ms | 3790.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3364.4ms | 3374.7ms |
| oneInternalHook | sidecars.session-locks.total | 3218.2ms | 3219.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3167.8ms | 3215.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 2888.0ms | 2945.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2886.9ms | 2944.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3248.5ms | 3284.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2674.2ms | 2705.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2654.5ms | 2683.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2653.6ms | 2682.3ms |
| allInternalHooks | sidecars.internal-hooks.total | 884.0ms | 911.0ms |
| fiftyPlugins | sidecars.session-locks.total | 4648.3ms | 4649.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4584.5ms | 4588.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4520.6ms | 4529.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4376.4ms | 4391.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4375.6ms | 4391.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4586.8ms | 4603.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4518.5ms | 4536.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4459.6ms | 4476.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4314.7ms | 4337.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4313.8ms | 4336.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10605.0ms | 0.000 | 2619.6MB | 1230.7MB | -1388.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10080.0ms | 0.099 | 1023.8MB | 1053.8MB | 30.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10258.0ms | 0.097 | 994.4MB | 1051.2MB | 56.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3694.0ms | 3699.5ms | 187.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 877.2ms | 910.4ms | 187.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 166.9ms |

## Observations

No data.

