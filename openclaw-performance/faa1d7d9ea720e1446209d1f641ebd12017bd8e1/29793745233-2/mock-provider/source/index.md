# OpenClaw Source Performance

Generated: 2026-07-21T01:44:58.108Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5820.3ms | 5828.0ms | 2245.7ms | 2148.3ms | 5722.4ms | 38.3ms | 829.6MB | 1.221 |
| skipChannels | gateway, skip channels | 2202.5ms | 2220.5ms | 2202.2ms | 2134.1ms | 2175.2ms | 38.0ms | 697.6MB | 1.362 |
| oneInternalHook | gateway, one configured internal hook | 3510.0ms | 3564.1ms | 3509.5ms | 3424.3ms | 3466.1ms | 40.5ms | 842.8MB | 1.146 |
| allInternalHooks | gateway, all internal hooks | 3565.7ms | 3580.7ms | 3565.4ms | 3490.9ms | 3535.0ms | 37.7ms | 863.3MB | 1.135 |
| fiftyPlugins | gateway, 50 manifest plugins | 5377.4ms | 5380.7ms | 5377.4ms | 3462.8ms | 3538.2ms | 37.9ms | 907.0MB | 1.130 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3724.3ms | 3744.7ms | 3723.8ms | 3308.2ms | 3384.3ms | 40.3ms | 861.3MB | 1.343 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 468.9MB | 422.4MB | ok |
| codex | 466.4MB | 419.9MB | ok |
| memory-lancedb | 465.4MB | 419.0MB | ok |
| xai | 461.9MB | 415.4MB | ok |
| google-meet | 458.2MB | 411.7MB | ok |
| workboard | 449.6MB | 403.1MB | ok |
| zoom-meetings | 447.6MB | 401.1MB | ok |
| anthropic | 438.4MB | 392.0MB | ok |
| active-memory | 428.8MB | 382.3MB | ok |
| llm-task | 428.6MB | 382.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4266.8ms | 4275.6ms |
| default | post-ready.agent-runtime-plugins.total | 4244.2ms | 4265.3ms |
| default | post-attach.update-check.total | 4240.5ms | 4262.7ms |
| default | post-attach.update-sentinel.total | 4215.7ms | 4256.1ms |
| default | sidecars.restart-sentinel.total | 4214.4ms | 4255.0ms |
| skipChannels | sidecars.internal-hooks.total | 708.2ms | 711.9ms |
| skipChannels | post-attach.update-check.total | 655.0ms | 657.5ms |
| skipChannels | ready.total | 640.7ms | 644.9ms |
| skipChannels | runtime.post-attach.total | 639.4ms | 643.5ms |
| skipChannels | post-attach.log.total | 638.5ms | 642.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2697.3ms | 2757.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2188.1ms | 2229.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2168.4ms | 2209.1ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2167.6ms | 2208.3ms |
| oneInternalHook | memory.ready.rssMb | 719.2ms | 720.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2735.4ms | 2742.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2208.7ms | 2215.9ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2189.2ms | 2195.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2188.4ms | 2194.9ms |
| allInternalHooks | memory.ready.rssMb | 722.7ms | 724.0ms |
| fiftyPlugins | sidecars.session-locks.total | 2562.5ms | 2589.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 2559.3ms | 2586.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2556.0ms | 2585.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2403.3ms | 2424.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2402.4ms | 2423.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2637.9ms | 2646.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2263.4ms | 2306.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2259.1ms | 2301.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2258.2ms | 2300.6ms |
| fiftyStartupLazyPlugins | sidecars.ready.total | 2241.9ms | 2288.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9051.0ms | 0.000 | 2273.4MB | 896.2MB | -1377.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8399.0ms | 0.238 | 771.6MB | 881.4MB | 109.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8707.0ms | 0.230 | 769.6MB | 865.2MB | 95.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2774.9ms | 2785.9ms | 59.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 648.6ms | 668.0ms | 59.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 54.7ms |

## Observations

No data.

