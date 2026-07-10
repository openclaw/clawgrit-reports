# OpenClaw Source Performance

Generated: 2026-07-10T00:43:51.465Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3873.9ms | 3936.8ms | 3863.4ms | 3748.1ms | 3817.7ms | 34.2ms | 826.2MB | 1.297 |
| skipChannels | gateway, skip channels | 3764.3ms | 3824.0ms | 3762.1ms | 3712.5ms | 3744.4ms | 33.7ms | 845.3MB | 1.308 |
| oneInternalHook | gateway, one configured internal hook | 3786.9ms | 3894.4ms | 3789.1ms | 3719.7ms | 3767.7ms | 33.8ms | 807.5MB | 1.284 |
| allInternalHooks | gateway, all internal hooks | 3779.1ms | 3823.3ms | 3774.7ms | 3716.5ms | 3749.1ms | 34.3ms | 820.1MB | 1.085 |
| fiftyPlugins | gateway, 50 manifest plugins | 3776.3ms | 3843.6ms | 3776.3ms | 3650.1ms | 3712.0ms | 35.2ms | 793.4MB | 1.071 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3587.3ms | 3648.7ms | 3585.8ms | 3505.8ms | 3569.6ms | 35.5ms | 768.7MB | 1.173 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 452.4MB | 409.3MB | ok |
| xai | 443.5MB | 400.4MB | ok |
| migrate-hermes | 423.4MB | 380.4MB | ok |
| llm-task | 405.7MB | 362.6MB | ok |
| active-memory | 401.0MB | 357.9MB | ok |
| openai | 398.5MB | 355.4MB | ok |
| voice-call | 379.4MB | 336.4MB | ok |
| google | 360.4MB | 317.4MB | ok |
| minimax | 345.7MB | 302.6MB | ok |
| xiaomi | 313.6MB | 270.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2806.5ms | 2886.9ms |
| default | cli.main.gateway-run-bootstrap | 2299.6ms | 2381.0ms |
| default | post-attach.update-sentinel.total | 851.8ms | 860.1ms |
| default | sidecars.restart-sentinel.total | 851.2ms | 859.5ms |
| default | sidecars.session-locks.total | 850.6ms | 858.9ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2783.7ms | 2874.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2263.4ms | 2338.5ms |
| skipChannels | post-attach.update-sentinel.total | 854.0ms | 861.1ms |
| skipChannels | sidecars.restart-sentinel.total | 853.5ms | 860.6ms |
| skipChannels | sidecars.session-locks.total | 852.8ms | 859.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2803.2ms | 2886.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2297.9ms | 2351.5ms |
| oneInternalHook | sidecars.internal-hooks.total | 910.1ms | 913.8ms |
| oneInternalHook | memory.ready.rssMb | 791.9ms | 793.6ms |
| oneInternalHook | post-attach.update-check.total | 786.1ms | 789.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2819.6ms | 2836.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2275.6ms | 2331.7ms |
| allInternalHooks | memory.ready.rssMb | 757.0ms | 790.0ms |
| allInternalHooks | post-attach.update-check.total | 728.2ms | 770.0ms |
| allInternalHooks | ready.total | 719.4ms | 760.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2884.4ms | 2915.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2342.2ms | 2368.9ms |
| fiftyPlugins | memory.ready.rssMb | 768.0ms | 792.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 750.4ms | 768.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 749.8ms | 768.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2960.1ms | 2962.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2409.9ms | 2439.5ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 749.4ms | 762.9ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 608.3ms | 625.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 538.7ms | 552.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8456.0ms | 0.118 | 800.7MB | 827.6MB | 26.9MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8391.0ms | 0.119 | 796.1MB | 822.3MB | 26.3MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8711.0ms | 0.230 | 789.6MB | 818.2MB | 28.6MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3538.8ms | 3732.3ms | 57.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 803.8ms | 859.4ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.1ms | 50.1ms |

## Observations

No data.

