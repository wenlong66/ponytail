# Ponytail for Hermes installed

Enable it if you did not install with `--enable`:

```bash
hermes plugins enable ponytail
```

Restart Hermes or the gateway after enabling.

In shared gateways, restrict `/ponytail` to trusted users with Hermes slash-command access controls; runtime mode is process-local.

Commands:

- `/ponytail [lite|full|ultra|off]`

The core skill is available as `ponytail:ponytail`. This slimmed build has no band UI, board, runtime statistics, metrics ledger, CSV/webhook reporting, or session import.
