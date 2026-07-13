# OpenClaw Source Performance

Generated: 2026-07-13T02:44:45.447Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4391.4ms | 4449.2ms | 4391.1ms | 4217.9ms | 4321.4ms | 35.1ms | 827.6MB | 1.144 |
| skipChannels | gateway, skip channels | 4222.4ms | 4234.1ms | 4217.8ms | 4146.8ms | 4182.0ms | 30.7ms | 803.9MB | 1.194 |
| oneInternalHook | gateway, one configured internal hook | 4313.1ms | 4470.5ms | 4312.7ms | 4247.4ms | 4282.8ms | 34.9ms | 812.1MB | 1.183 |
| allInternalHooks | gateway, all internal hooks | 4246.5ms | 4402.7ms | 4245.9ms | 4183.1ms | 4215.7ms | 32.5ms | 808.9MB | 1.202 |
| fiftyPlugins | gateway, 50 manifest plugins | 3937.6ms | 4200.1ms | 4000.3ms | 3851.9ms | 3910.9ms | 30.7ms | 783.9MB | 1.304 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3525.6ms | 3572.2ms | 3523.9ms | 3443.1ms | 3505.2ms | 28.1ms | 758.8MB | 1.153 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 450.8MB | 407.9MB | ok |
| migrate-hermes | 426.0MB | 383.1MB | ok |
| llm-task | 422.1MB | 379.1MB | ok |
| xai | 416.2MB | 373.2MB | ok |
| active-memory | 402.6MB | 359.7MB | ok |
| openai | 398.9MB | 355.9MB | ok |
| voice-call | 371.6MB | 328.7MB | ok |
| google | 358.3MB | 315.3MB | ok |
| minimax | 355.0MB | 312.0MB | ok |
| vydra | 312.9MB | 269.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3163.8ms | 3185.1ms |
| default | cli.main.gateway-run-bootstrap | 2579.3ms | 2595.1ms |
| default | post-attach.update-sentinel.total | 978.4ms | 1007.2ms |
| default | sidecars.restart-sentinel.total | 977.7ms | 1006.5ms |
| default | sidecars.session-locks.total | 976.9ms | 1005.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3066.2ms | 3120.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2492.3ms | 2533.7ms |
| skipChannels | post-attach.update-sentinel.total | 1010.9ms | 1037.8ms |
| skipChannels | sidecars.restart-sentinel.total | 1010.2ms | 1037.1ms |
| skipChannels | sidecars.session-locks.total | 1009.3ms | 1035.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3188.5ms | 3315.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2566.9ms | 2718.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 1121.7ms | 1121.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1121.0ms | 1121.0ms |
| oneInternalHook | sidecars.session-locks.total | 1120.0ms | 1120.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3108.7ms | 3320.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2508.5ms | 2689.9ms |
| allInternalHooks | post-attach.update-check.total | 858.5ms | 879.6ms |
| allInternalHooks | ready.total | 844.3ms | 865.8ms |
| allInternalHooks | runtime.post-attach.total | 842.7ms | 864.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3029.0ms | 3137.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2454.5ms | 2527.7ms |
| fiftyPlugins | memory.ready.rssMb | 781.1ms | 782.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 742.5ms | 807.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 741.8ms | 796.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2918.6ms | 2952.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2375.8ms | 2431.8ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 747.2ms | 754.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 612.1ms | 617.4ms |
| fiftyStartupLazyPlugins | memory.ready.heapUsedMb | 538.0ms | 542.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8474.0ms | 0.118 | 842.7MB | 868.8MB | 26.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8265.0ms | 0.121 | 803.2MB | 831.0MB | 27.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8246.0ms | 0.121 | 847.6MB | 873.6MB | 26.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2932.7ms | 3038.8ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 637.4ms | 708.1ms | 56.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.0ms | 44.0ms |

## Observations

No data.

