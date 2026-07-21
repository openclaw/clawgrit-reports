# OpenClaw Source Performance

Generated: 2026-07-21T08:43:45.250Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7799.5ms | 7857.8ms | 7799.4ms | 3251.3ms | 7700.2ms | 46.8ms | 924.3MB | 1.282 |
| skipChannels | gateway, skip channels | 8103.2ms | 8229.0ms | 8102.5ms | 3394.6ms | 3458.5ms | 45.9ms | 927.9MB | 1.322 |
| oneInternalHook | gateway, one configured internal hook | 4443.3ms | 8220.9ms | 4442.9ms | 4358.3ms | 4403.4ms | 47.6ms | 940.3MB | 1.375 |
| allInternalHooks | gateway, all internal hooks | 4107.5ms | 4236.2ms | 4107.2ms | 4034.6ms | 4077.5ms | 40.5ms | 915.7MB | 1.248 |
| fiftyPlugins | gateway, 50 manifest plugins | 6488.1ms | 7775.8ms | 6488.0ms | 4198.6ms | 4278.6ms | 40.4ms | 1131.9MB | 1.310 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6060.8ms | 6183.7ms | 6060.8ms | 3818.7ms | 3904.3ms | 41.5ms | 1121.3MB | 1.320 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 507.6MB | 461.2MB | ok |
| active-memory | 505.9MB | 459.4MB | ok |
| migrate-hermes | 505.7MB | 459.2MB | ok |
| anthropic | 505.0MB | 458.5MB | ok |
| teams-meetings | 503.1MB | 456.6MB | ok |
| workboard | 502.9MB | 456.4MB | ok |
| voice-call | 500.4MB | 453.9MB | ok |
| xai | 498.6MB | 452.1MB | ok |
| memory-lancedb | 455.0MB | 408.5MB | ok |
| llm-task | 453.7MB | 407.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5354.0ms | 5513.8ms |
| default | post-ready.agent-runtime-plugins.total | 5333.6ms | 5490.2ms |
| default | post-attach.update-check.total | 5330.8ms | 5486.5ms |
| default | post-attach.update-sentinel.total | 5322.7ms | 5476.8ms |
| default | sidecars.restart-sentinel.total | 5321.6ms | 5475.4ms |
| skipChannels | sidecars.session-locks.total | 5781.0ms | 5881.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5778.4ms | 5878.5ms |
| skipChannels | post-attach.update-sentinel.total | 5773.4ms | 5872.7ms |
| skipChannels | sidecars.restart-sentinel.total | 5772.2ms | 5871.3ms |
| skipChannels | sidecars.ready.total | 5749.1ms | 5841.2ms |
| oneInternalHook | sidecars.ready.total | 4341.9ms | 4341.9ms |
| oneInternalHook | sidecars.total.total | 4334.3ms | 4334.3ms |
| oneInternalHook | sidecars.memory.total | 4333.6ms | 4333.6ms |
| oneInternalHook | sidecars.plugin-services.total | 4332.9ms | 4332.9ms |
| oneInternalHook | sidecars.plugin-services.phone-control.phone-control-expiry.total | 4331.7ms | 4331.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3138.8ms | 3213.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2542.7ms | 2583.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2516.7ms | 2557.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2515.9ms | 2556.2ms |
| allInternalHooks | memory.ready.rssMb | 794.0ms | 908.6ms |
| fiftyPlugins | sidecars.session-locks.total | 3079.5ms | 4086.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3074.5ms | 4080.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3067.7ms | 3333.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2854.3ms | 3790.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 2853.2ms | 3788.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3012.0ms | 3110.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 2754.0ms | 2766.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 2745.1ms | 2772.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2565.2ms | 2584.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 2564.2ms | 2583.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10812.0ms | 0.000 | 2424.9MB | 938.0MB | -1486.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10840.0ms | 0.185 | 891.3MB | 935.4MB | 44.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9758.0ms | 0.205 | 805.9MB | 976.9MB | 170.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3608.5ms | 3615.4ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 787.3ms | 791.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 69.1ms |

## Observations

No data.

