# OpenClaw Source Performance

Generated: 2026-07-23T05:28:15.759Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5818.6ms | 5997.8ms | 5805.4ms | 2904.2ms | 5757.3ms | 42.6ms | 889.8MB | 1.206 |
| skipChannels | gateway, skip channels | 2973.8ms | 2985.6ms | 2973.5ms | 2900.5ms | 2941.1ms | 38.8ms | 825.6MB | 1.356 |
| oneInternalHook | gateway, one configured internal hook | 6479.1ms | 6638.1ms | 6479.1ms | 4171.7ms | 4215.0ms | 40.3ms | 960.8MB | 1.235 |
| allInternalHooks | gateway, all internal hooks | 6401.6ms | 6485.5ms | 6401.6ms | 4255.5ms | 4302.7ms | 41.6ms | 969.0MB | 1.370 |
| fiftyPlugins | gateway, 50 manifest plugins | 8189.4ms | 8400.5ms | 8176.7ms | 4153.3ms | 4229.1ms | 43.0ms | 1130.5MB | 1.226 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8302.5ms | 8425.3ms | 8302.3ms | 4032.5ms | 4116.6ms | 41.6ms | 1135.7MB | 1.232 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 514.7MB | 468.3MB | ok |
| teams-meetings | 513.3MB | 466.8MB | ok |
| voice-call | 511.1MB | 464.6MB | ok |
| codex | 510.0MB | 463.6MB | ok |
| xai | 509.6MB | 463.1MB | ok |
| zoom-meetings | 507.5MB | 461.1MB | ok |
| llm-task | 506.8MB | 460.3MB | ok |
| google-meet | 506.3MB | 459.9MB | ok |
| migrate-hermes | 505.3MB | 458.8MB | ok |
| workboard | 505.2MB | 458.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3765.5ms | 3789.1ms |
| default | post-ready.agent-runtime-plugins.total | 3752.8ms | 3780.8ms |
| default | post-attach.update-check.total | 3749.8ms | 3778.2ms |
| default | post-attach.update-sentinel.total | 3740.5ms | 3769.6ms |
| default | sidecars.restart-sentinel.total | 3739.3ms | 3768.5ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 861.4ms | 879.0ms |
| skipChannels | sidecars.internal-hooks.total | 854.2ms | 862.6ms |
| skipChannels | post-attach.update-check.total | 792.1ms | 798.6ms |
| skipChannels | ready.total | 776.7ms | 783.2ms |
| skipChannels | runtime.post-attach.total | 775.4ms | 781.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3236.9ms | 3286.2ms |
| oneInternalHook | sidecars.session-locks.total | 2973.3ms | 3012.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2970.8ms | 3009.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 2963.1ms | 2998.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2961.8ms | 2997.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3302.0ms | 3355.1ms |
| allInternalHooks | sidecars.session-locks.total | 2828.1ms | 2888.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2825.9ms | 2886.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 2817.1ms | 2877.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2816.1ms | 2876.1ms |
| fiftyPlugins | sidecars.session-locks.total | 4849.4ms | 4952.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4759.5ms | 4859.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4724.7ms | 4822.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4520.8ms | 4609.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4519.9ms | 4608.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4789.9ms | 4873.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4697.9ms | 4774.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4662.8ms | 4734.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4463.6ms | 4507.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4462.7ms | 4506.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9806.0ms | 0.000 | 2447.9MB | 1033.3MB | -1414.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9426.0ms | 0.106 | 870.1MB | 955.0MB | 84.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9347.0ms | 0.214 | 868.0MB | 954.2MB | 86.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3398.1ms | 3400.2ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 823.0ms | 845.0ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 61.7ms |

## Observations

No data.

