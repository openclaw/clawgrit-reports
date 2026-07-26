# OpenClaw Source Performance

Generated: 2026-07-26T11:01:36.749Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6154.5ms | 6193.0ms | 6154.4ms | 3191.4ms | 6043.1ms | 43.1ms | 1055.3MB | 1.318 |
| skipChannels | gateway, skip channels | 6186.8ms | 6203.0ms | 6159.5ms | 3135.7ms | 3177.5ms | 42.5ms | 1016.7MB | 1.293 |
| oneInternalHook | gateway, one configured internal hook | 6737.6ms | 6742.2ms | 6737.5ms | 4539.1ms | 4582.2ms | 41.2ms | 1194.7MB | 1.286 |
| allInternalHooks | gateway, all internal hooks | 6827.4ms | 6829.1ms | 6827.2ms | 4566.3ms | 4608.9ms | 44.6ms | 1183.3MB | 1.318 |
| fiftyPlugins | gateway, 50 manifest plugins | 8334.9ms | 8365.6ms | 8334.9ms | 4369.9ms | 4443.6ms | 43.1ms | 1150.9MB | 1.215 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8200.4ms | 8212.8ms | 8200.3ms | 4141.1ms | 4218.9ms | 43.1ms | 1124.8MB | 1.227 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 535.8MB | 489.3MB | ok |
| active-memory | 534.5MB | 488.0MB | ok |
| llm-task | 510.7MB | 464.3MB | ok |
| codex | 510.5MB | 464.1MB | ok |
| workboard | 510.4MB | 464.0MB | ok |
| google-meet | 507.8MB | 461.3MB | ok |
| anthropic | 507.7MB | 461.3MB | ok |
| memory-lancedb | 507.7MB | 461.2MB | ok |
| acpx | 505.6MB | 459.1MB | ok |
| zoom-meetings | 505.6MB | 459.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3922.6ms | 3946.7ms |
| default | post-ready.agent-runtime-plugins.total | 3895.2ms | 3920.0ms |
| default | post-attach.update-check.total | 3892.6ms | 3917.4ms |
| default | post-attach.update-sentinel.total | 3883.9ms | 3908.6ms |
| default | sidecars.restart-sentinel.total | 3882.9ms | 3907.6ms |
| skipChannels | sidecars.session-locks.total | 3971.9ms | 4000.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3969.9ms | 3998.7ms |
| skipChannels | post-attach.update-sentinel.total | 3965.8ms | 3994.5ms |
| skipChannels | sidecars.restart-sentinel.total | 3964.8ms | 3993.5ms |
| skipChannels | sidecars.ready.total | 3957.6ms | 3986.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3400.3ms | 3444.2ms |
| oneInternalHook | sidecars.session-locks.total | 3002.2ms | 3003.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3000.4ms | 3001.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 2996.3ms | 2997.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2995.3ms | 2996.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3425.4ms | 3448.2ms |
| allInternalHooks | sidecars.session-locks.total | 3026.5ms | 3040.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3024.8ms | 3038.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 3020.7ms | 3034.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3019.7ms | 3033.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4866.3ms | 4894.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4778.5ms | 4806.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4744.6ms | 4774.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4541.8ms | 4581.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4540.9ms | 4580.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4684.1ms | 4751.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4597.9ms | 4660.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4559.8ms | 4626.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4357.7ms | 4420.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4356.7ms | 4419.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10898.0ms | 0.000 | 2517.5MB | 1071.7MB | -1445.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10578.0ms | 0.095 | 916.5MB | 1068.6MB | 152.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10420.0ms | 0.096 | 874.5MB | 1042.0MB | 167.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3370.8ms | 3433.8ms | 61.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 869.0ms | 881.2ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 134.7ms |

## Observations

No data.

